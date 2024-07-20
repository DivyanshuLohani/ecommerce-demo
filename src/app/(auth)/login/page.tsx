import LoginForm from "@/components/LoginForm";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const user = await getUser();
  if (user) redirect("/interests");
  return (
    <div className="flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
