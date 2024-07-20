import Link from "next/link";
import React from "react";

export default function LoginForm() {
  return (
    <form className="flex flex-col border p-10 rounded-lg mt-10 w-2/5">
      <h2 className="text-3xl font-bold text-center">Login</h2>
      <span className="text-center mt-5 font-semibold text-lg">
        Welcome back to ECOMMERCE
      </span>
      <span className="text-center mt-5 text-sm">
        The next gen business marketplace
      </span>
      <span className="mt-10"></span>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          className="border rounded-md p-2"
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
        />
      </div>

      <button className="mt-10 w-full bg-black text-white py-2 uppercase text-sm px-2 rounded-md">
        Login
      </button>

      <footer className="mt-10 text-center">
        Don‘t have an Account?{" "}
        <Link href={"/sign-up"} className="uppercase font-semibold">
          Sign Up
        </Link>{" "}
      </footer>
    </form>
  );
}
