import { Sparkles } from "lucide-react";
import { Kanit } from "next/font/google";

const anta = Kanit({ subsets: ["latin"], weight: ["600"] });

const Logo = () => {
  return (
    <h2 className="flex flex-row items-center gap-2 text-3xl text-indigo-500">
      <Sparkles strokeWidth={2.7} size={28} />{" "}
      <span className={`${anta.className} font-sans`}>PixelCraft AI</span>
    </h2>
  );
};

export default Logo;
