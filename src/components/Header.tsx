import React from "react";
import Link from "next/link";

import ButtonLink from "@/components/ButtonLink";
import Logo from "@/components/Logo";

function Header() {
  return (
    <header className="absolute px-6 [.header+&]:pt-44 [.header+&]:md:pt-32 top-0 w-full ~h-32/40 ~py-4/6 md:h-32 z-50 ">
      <div className="mx-auto flex flex-wrap items-center justify-between lg:justify-center ~gap-y-6/10 ~gap-x-4/6 w-full max-w-6xl">
        {/* logo */}
        <div className="inline-flex items-center justify-center ~w-20/40  max-h-10">
          <Link
            className="w-full h-full flex relative items-center justify-center"
            href="/"
          >
            <Logo className="text-brand-purple" />
          </Link>
        </div>

        {/* nav menu */}
        <nav
          className="flex-1 w-full flex items-center order-last sm:order-none  justify-center"
          aria-label="Main"
        >
          <ul className="w-full flex-1 flex items-center justify-center ~gap-4/8 text-xl font-medium">
            <li className="inline-flex items-center justify-center ~text-lg/xl hover:text-brand-purple transition-colors duration-300">
              <Link href={"#"}>Team</Link>
            </li>
            <li className="inline-flex items-center justify-center ~text-lg/xl hover:text-brand-purple transition-colors duration-300">
              <Link href={"/build"}>Customizer</Link>
            </li>
            <li className="inline-flex items-center justify-center ~text-lg/xl hover:text-brand-purple transition-colors duration-300">
              <Link href={"#"}>About</Link>
            </li>
          </ul>
        </nav>

        {/* cart */}
        <div className="flex items-center justify-center">
          <ButtonLink color="purple" icon="cart" size="md" href={"#"}>
            <span className="hidden md:inline" aria-label="Cart">
              Cart
            </span>{" "}
            {"(1)"}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
