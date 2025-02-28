import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
