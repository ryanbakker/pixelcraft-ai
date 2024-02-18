import Link from "next/link";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="z-50">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full">
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
