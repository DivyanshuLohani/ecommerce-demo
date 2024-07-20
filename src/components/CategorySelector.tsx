"use client";
import { saveCategory } from "@/lib/actions";
import Link from "next/link";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { useFormState } from "react-dom";

export default function CategorySelector({
  categories,
}: {
  categories: { id: number; name: string; selected: boolean }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      {categories.map((e, i) => {
        return <CategorySelectItem category={e} key={i} />;
      })}
    </div>
  );
}

function CategorySelectItem({
  category,
}: {
  category: { id: number; name: string; selected: boolean };
}) {
  const [state, dispatch] = useFormState(saveCategory, null);
  const [checked, setChecked] = useState(category.selected);
  const [pending, startTransiton] = useTransition();

  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form ref={formRef} action={dispatch} className="flex gap-5 ">
      <input
        type="checkbox"
        id={category.name}
        checked={category.selected}
        className={`w-5 accent-black ${
          pending ? "cursor-wait" : "cursor-pointer"
        }`}
        onChange={(e) => {
          startTransiton(() => {
            formRef?.current?.requestSubmit();
          });
        }}
      />
      <input className="hidden" name="categoryID" defaultValue={category.id} />
      <label htmlFor={category.name} className="cursor-pointer select-none">
        {category.name}
      </label>
    </form>
  );
}
