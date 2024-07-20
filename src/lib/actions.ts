"use server";

import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
import { sendOTP } from "./resend";
import { getUser, setCookies } from "./auth";
import { revalidatePath } from "next/cache";

export async function login(state: any, data: FormData) {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user)
      return {
        success: false,
        message: "No user found",
      };
    if (!user.verified)
      return {
        success: false,
        message: "Please verify your email first",
      };
    // Check passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      await setCookies(user);
      return {
        success: true,
        message: "Logged in",
      };
    }
    return {
      success: false,
      message: "Invalid Credentials",
    };
  } catch (e) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
export async function signup(state: any, data: FormData) {
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const name = data.get("name") as string;
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (existingUser)
      return {
        success: false,
        message: "User already exists",
      };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const code = Math.floor(1000 + Math.random() * 90000000)
    .toString()
    .padEnd(8, "0");
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: passwordHash,
      verified: false,
      verifyCode: code,
    },
  });
  await sendOTP(email, name, code);

  return {
    success: true,
    message: "Verify your email",
  };
}

export async function verifyUser(state: any, data: FormData) {
  const code = data.get("otp") as string;
  const email = data.get("email") as string;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!user)
    return {
      success: false,
      message: "NO USER FOUND",
    };
  if (user.verifyCode != code) {
    return {
      success: false,
      message: "Invalid Code",
    };
  }
  if (user.verified)
    return {
      success: false,
      message: "User already verified",
    };

  await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      verified: true,
      verifyCode: null,
    },
  });

  return {
    success: true,
    message: "Verified",
  };
}

export async function saveCategory(state: any, data: FormData) {
  const user = await getUser();
  if (!user) return { success: false, message: "User not logged in" };

  const categoryId = parseInt(data.get("categoryID") as string);

  const existing = await prisma.userCategories.findFirst({
    where: { categoryId, userId: user.id },
  });
  if (existing) {
    await prisma.userCategories.delete({
      where: { userId_categoryId: { categoryId, userId: user.id } },
    });
  } else {
    const a = await prisma.userCategories.create({
      data: {
        categoryId,
        userId: user.id,
      },
    });
  }
  revalidatePath("/interests");
  return { success: true, message: "Ok" };
}
