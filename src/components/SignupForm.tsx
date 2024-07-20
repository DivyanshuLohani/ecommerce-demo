"use client";
import { signup } from "@/lib/actions";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "./ui/use-toast";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [state, dispatch] = useFormState(signup, null);
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    if (!state) return;
    if (!state.success) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
    if (state.success) {
      router.push(`/verify?email=${email}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form
      action={dispatch}
      className="flex flex-col border p-10 rounded-lg mt-10 w-2/5"
    >
      <h2 className="text-3xl font-semibold text-center">
        Create your Account
      </h2>

      <span className="mt-10"></span>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          className="border rounded-md p-2"
          required
        />
      </div>
      <span className="mt-3"></span>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          className="border rounded-md p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <span className="mt-3"></span>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="border rounded-md p-2"
          name="password"
          required
        />
      </div>

      <button className="mt-10 w-full bg-black text-white py-3 uppercase text-sm px-2 rounded-md font-semibold hover:bg-[#111111]">
        Create Account
      </button>

      <footer className="mt-10 text-center">
        Have an Account?{" "}
        <Link href={"/login"} className="uppercase font-semibold">
          Login
        </Link>{" "}
      </footer>
    </form>
  );
}
