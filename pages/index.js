import Menu from "@/components/Menu.js";
import Navbar from "../components/Navbar.js";
import Address from "@/components/Address.js";
import Services from "@/components/Services.js";
import Separator from "@/components/Separator.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <Separator />
      <Menu />
      <Separator />
      <Address />
    </>
  );
}
