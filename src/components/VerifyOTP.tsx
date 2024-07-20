"use client";
import Link from "next/link";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";

export default function VerifyOTP() {
  const [otp, setOtp] = useState<string>("");
  return (
    <form className="flex flex-col border p-10 rounded-lg mt-10 w-2/5">
      <h2 className="text-3xl font-semibold text-center">Verify your email</h2>
      <span className="text-center mt-5 text-sm">
        Enter the 8 digit code you have received on
        <span className="block font-semibold">text**@gmail.com</span>
      </span>
      <span className="mt-10"></span>
      <span className="text-left">Code</span>
      <div className="flex w-full">
        <InputOTP maxLength={8} onChange={setOtp} value={otp}>
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

      <button className="mt-10 w-full bg-black text-white py-3 uppercase text-sm px-2 rounded-md font-semibold">
        Verify
      </button>
    </form>
  );
}
