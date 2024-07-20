import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = cookies().get("user");
  if (!user) redirect("/login");

  return children;
}
