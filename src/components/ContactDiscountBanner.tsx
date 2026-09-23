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

      </span>

    </div>
  );
}
