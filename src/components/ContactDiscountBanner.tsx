"use client";

import React, { useState, useEffect } from "react";

export default function ContactDiscountBanner() {
  const [currentDate, setCurrentDate] = useState<string>(() => {
    return new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  return (
    <div className="inline-flex items-center gap-2 select-none py-1">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
      </span>
      <p className="text-red-600 font-extrabold text-sm sm:text-base lg:text-lg tracking-tight whitespace-nowrap drop-shadow-sm">
        We are giving 30% discount as of{" "}
        <span
          className="underline decoration-red-400/70 underline-offset-4"
          suppressHydrationWarning
        >
          {currentDate}
        </span>
      </p>
    </div>
  );
}
