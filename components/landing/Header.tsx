import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import Logo from "../Logo";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-50">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full">
        <nav className="flex flex-row justify-between items-center w-full">
          <div />
          <Logo />
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button
                asChild
                className="bg-purple-gradient bg-cover rounded-lg"
                size="lg"
              >
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
