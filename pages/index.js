import Menu from "@/components/Menu.js";
import PageLayout from "@/components/PageLayout.js";
import Navbar from "../components/Navbar.js";
import BarJoke from "@/components/BarJoke.js";
import Address from "@/components/Address.js";
import Services from "@/components/Services.js";
import Separator from "@/components/Separator.js";
import IntrestingFacts from "@/components/IntrestingFacts.js";

export default function Home() {
  return (
    <>
      <PageLayout>
        {/* <Navbar /> */}
        <Services />
        <Separator />
        <Menu />
        <Separator />
        <Address />
        <Separator />
        <IntrestingFacts />
        <Separator withIcon={false} />
        <BarJoke />
        {/* <Separator withIcon={false} />
      <Footer /> */}
      </PageLayout>
    </>
  );
}
