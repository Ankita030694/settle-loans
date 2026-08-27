'use client';

import React from 'react';
import { AdminAuthProvider } from '@/context/AdminAuthContext';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-[#2E2E2E] font-sans antialiased selection:bg-[#1F5EFF] selection:text-white">
        {children}
      </div>
    </AdminAuthProvider>
  );
}
