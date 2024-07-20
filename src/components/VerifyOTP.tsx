"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { redirect, useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";
import { verifyUser } from "@/lib/actions";
import { toast } from "./ui/use-toast";

export default function VerifyOTP() {
  const [otp, setOtp] = useState<string>("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [state, dispatch] = useFormState(verifyUser, null);

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
      redirect(`/interests`);
    }
  }, [state]);

  if (!email) return redirect("/login");

  return (
    <form
      action={dispatch}
      className="flex flex-col border p-10 rounded-lg mt-10 w-2/5"
    >
      <h2 className="text-3xl font-semibold text-center">Verify your email</h2>
      <span className="text-center mt-5 text-sm">
        Enter the 8 digit code you have received on
        <span className="block font-semibold">
          {email.slice(0, 4)}**@{email.split("@")[email.split("@").length - 1]}
        </span>
      </span>
      <span className="mt-10"></span>
      <span className="text-left">Code</span>
      <div className="flex w-full">
        <InputOTP maxLength={8} onChange={setOtp} value={otp} name="otp">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={3} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={4} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={5} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={6} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={7} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <input
        className="hidden"
        defaultValue={email}
        name="email"
        contentEditable="false"
      />
      <button className="mt-10 w-full bg-black text-white py-3 uppercase text-sm px-2 rounded-md font-semibold">
        Verify
      </button>
    </form>
  );
}
