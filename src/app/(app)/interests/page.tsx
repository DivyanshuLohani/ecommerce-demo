import CategorySelector from "@/components/CategorySelector";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  let page = searchParams.page;
  if (!page) page = "1";

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
        <CategorySelector
          categories={[
            { name: "hello", selected: false },
            { name: "shoes", selected: false },
            { name: "electronics", selected: true },
            { name: "digital", selected: true },
            { name: "furniture", selected: false },
          ]}
        />
      </div>
      <div className="paginator"></div>
    </div>
  );
}
