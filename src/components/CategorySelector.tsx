import Link from "next/link";
import React from "react";

export default function CategorySelector({
  categories,
}: {
  categories: { name: string; selected: boolean }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      {categories.map((e, i) => {
        return (
          <div key={i} className="flex gap-5 ">
            <input
              type="checkbox"
              id={i.toString()}
              defaultChecked={e.selected}
              className="w-5 accent-black cursor-pointer"
            />
            <label
              htmlFor={i.toString()}
              className="cursor-pointer select-none"
            >
              {e.name}
            </label>
          </div>
        );
      })}
    </div>
  );
}
