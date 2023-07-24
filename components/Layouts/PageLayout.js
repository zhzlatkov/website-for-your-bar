import Footer from "@/components/Footer.js";
import Navbar from "../Navbar.js";
import Separator from "@/components/Separator.js";

export default function PageLayout({ children }) {
  return (
    <div className="flex bg-shark-950 flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-shark-950 h-full">{children}</main>
      <Separator withIcon={false} />
      <Footer />
    </div>
  );
}
