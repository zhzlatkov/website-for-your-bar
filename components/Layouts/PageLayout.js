import Footer from "@/components/Footer.js";
import Navbar from "../Navbar.js";
import Separator from "@/components/Separator.js";
import ScrollToTop from "@/components/ScrollToTop.js";
import AllowOrdering from "@/components/AllowOrdering.js";

import { Analytics } from "@vercel/analytics/react";

export default function PageLayout({ children, settings, socialMedias }) {
  return (
    <div className="flex bg-shark-950 flex-col min-h-screen">
      <Navbar settings={settings} />
      <AllowOrdering />
      <main className="flex-grow bg-shark-950 h-full">
        <ScrollToTop />
        {children}
      </main>
      <Separator withIcon={false} />
      <Footer socialMedias={socialMedias} />
      <Analytics />
    </div>
  );
}
