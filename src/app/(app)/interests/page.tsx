import CategorySelector from "@/components/CategorySelector";
import Paginator from "@/components/Paginator";
import { getCategories, getMaxPages } from "@/lib/data";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  let page = parseInt(searchParams.page ?? "0");
  if (!page) page = 1;

  const categories = await getCategories(page);
  const maxPages = await getMaxPages();
  console.log(categories);
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col border p-10 rounded-lg mt-10 w-2/5">
        <h2 className="text-3xl font-bold text-center">
          Please mark your interests!
        </h2>

        <span className="text-center mt-5 text-sm">
          We will keep you notified
        </span>
        <span className="my-5 text-sm font-semibold">My Saved Interests!</span>
        <Suspense fallback={<div>Loading...</div>}>
          <CategorySelector categories={categories} />
        </Suspense>
        <div className="mt-10 flex gap-3 text-gray-500">
          <Paginator page={page} totalPages={maxPages} />
        </div>
      </div>
    </div>
  );
}
