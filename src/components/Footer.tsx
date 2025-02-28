import Link from "next/link";
import Image from "next/image";

import { Bounded } from "@/components/Bounded";
import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";

function Footer() {
  return (
    <footer className="bg-texture bg-zinc-900 relative overflow-hidden">
      <div className="relative flex items-center justify-center md:justify-start h-[80vh] inset-0 bg-zinc-600 bg-texture">
        {/* BG Image */}
        <Image
          src="/footer-bg.jpg"
          layout="fill"
          className="w-full absolute origin-bottom object-cover mix-blend-overlay backdrop-brightness-75"
          alt="Footer Image"
        />
        {/* Contact form */}
        <div className="w-full ~px-3/0 ~py-4/6 md:~w-[40rem]/[52rem] mx-auto ">
          <ContactForm />
        </div>
      </div>

      {/* logo */}
      <div className="absolute top-4 left-3">
        <Logo className="relative h-20 text-brand-lime mix-blend-exclusion md:h-28" />
      </div>

      <Bounded as="nav">
        {/* nav link */}
        <ul className="flex items-center justify-center ~gap-4/8 text-xl font-medium text-white">
          <li className="inline-flex items-center justify-center ~text-lg/xl hover:underline transition-colors duration-300">
            <Link href={"#"}>Team</Link>
          </li>
          <li className="inline-flex items-center justify-center ~text-lg/xl hover:underline transition-colors duration-300">
            <Link href={"/build"}>Customizer</Link>
          </li>
          <li className="inline-flex items-center justify-center ~text-lg/xl hover:underline transition-colors duration-300">
            <Link href={"#"}>About</Link>
          </li>
        </ul>
      </Bounded>
    </footer>
  );
}

export default Footer;
