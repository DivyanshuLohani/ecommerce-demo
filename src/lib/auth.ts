"use server";

import { User } from "@prisma/client";
import { cookies } from "next/headers";

export async function setCookies(user: User) {
  cookies().set(
    "user",
    JSON.stringify({ name: user.name, email: user.email, id: user.id }),
    {
      maxAge: 60 * 60 * 24 * 15, // 15 Days
      httpOnly: true,
      secure: false,
    }
  );
}

export async function getUser(): Promise<
  { name: string; email: string; id: number } | undefined
> {
  const user = cookies().get("user");
  if (user) return JSON.parse(user.value);
}
