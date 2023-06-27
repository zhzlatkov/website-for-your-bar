import Footer from "@/components/Footer.js";
import Navbar from "../components/Navbar.js";
import Separator from "@/components/Separator.js";

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Separator withIcon={false} />
      <Footer />
    </>
  );
}
