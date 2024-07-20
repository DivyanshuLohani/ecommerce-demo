"use server";

import { getUser } from "./auth";
import { prisma } from "./prisma";
import { revalidatePath, unstable_noStore } from "next/cache";

const PAGE_SIZE = 6;

export async function getMaxPages() {
  const total_pages = Math.ceil((await prisma.category.count()) / PAGE_SIZE);
  return total_pages;
}

export async function getCategories(page: number) {
  const user = await getUser();
  if (!user) return [];
  const categories = await prisma.category.findMany({
    take: PAGE_SIZE,
    skip: (page - 1) * PAGE_SIZE,
  });
  const userSelected = await prisma.userCategories.findMany({
    where: {
      userId: user.id,
    },
    select: { categoryId: true },
  });
  const selectedArray = userSelected.map((e) => e.categoryId);
  revalidatePath("/interests/");
  return categories.map((e) => {
    return { id: e.id, name: e.name, selected: selectedArray.includes(e.id) };
  });
}
