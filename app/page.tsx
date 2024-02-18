import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, UserCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main className="flex h-screen flex-col text-white overflow-hidden">
      <Header />
      <div className="relative isolate flex-1">
        <div
          className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%",
            }}
          />
        </div>

        <section>
          <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-2 flex flex-col justify-center h-full gap-10 mt-6">
                <h1 className="text-xl lg:text-7xl font-black font-sans leading-[80px]">
                  Elevate Your Artistry – Pixelcraft AI Unleashes Possibilities
                </h1>

                <p className=" text-xl max-w-[70%] leading-relaxed">
                  Start creating your masterpieces by signing up. New users get
                  10 free credits so get started today.
                </p>

                <div className="flex flex-row gap-5 items-center mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-purple-950 font-bold hover:!bg-gray-300"
                  >
                    <Link
                      href="/sign-up"
                      className="flex flex-row items-center gap-1.5"
                    >
                      <UserCircle size={20} /> Sign Up
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="border border-white bg-transparent text-white font-bold"
                  >
                    <Link
                      href="/dashboard"
                      className="flex flex-row items-center gap-1.5"
                    >
                      <LayoutDashboard size={20} /> Go to Dashboard
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div />
          </div>
        </section>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%",
            }}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
