import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />

      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}

          <div className="mt-10 flex-center">
            <Link href="/terms-and-conditions" className="w-full text-center">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>

      <Toaster />
    </main>
  );
};

export default Layout;
