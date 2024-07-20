import VerifyOTP from "@/components/VerifyOTP";
import React, { Suspense } from "react";

export default async function page() {
  return (
    <div className="flex items-center justify-center">
      <Suspense>
        <VerifyOTP />
      </Suspense>
    </div>
  );
}
