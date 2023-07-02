import Footer from "@/components/Footer.js";
import Navbar from "../Navbar.js";
import Separator from "@/components/Separator.js";

export default function PageLayout({ children }) {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <main>{children}</main>
      <Separator withIcon={false} />
      <Footer />
    </div>
  );
}
