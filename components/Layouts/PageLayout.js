import Footer from "@/components/Footer.js";
import Navbar from "../Navbar.js";
import Separator from "@/components/Separator.js";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow h-full">{children}</main>
      <Separator withIcon={false} />
      <Footer />
    </div>
  );
}
