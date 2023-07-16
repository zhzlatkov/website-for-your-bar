import Footer from "@/components/Footer.js";
import Navbar from "../Navbar.js";
import Separator from "@/components/Separator.js";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-gray-200">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </div>
      <Separator withIcon={false} />
      <Footer />
    </div>
  );
}
