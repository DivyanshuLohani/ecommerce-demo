import Link from "next/link";
import React from "react";

export default function SignupForm() {
  return (
    <form className="flex flex-col border p-10 rounded-lg mt-10 w-2/5">
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

      <button className="mt-10 w-full bg-black text-white py-3 uppercase text-sm px-2 rounded-md font-semibold">
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
