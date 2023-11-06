import Loading from "../Loading";
import { useRouter } from "next/router";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
import { useState, useEffect } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

export default function AdminLayout({ current, children }) {
  const navigationPages = [
    {
      name: "Dashboard",
      href: "/your-bar-admin",
      icon: HomeIcon,
      current: current === "dashboard",
    },
  ];
  const yourBarPages = [
    {
      id: 1,
      name: "Settings",
      href: "/your-bar-admin/settings",
      initial: "S",
      current: current === "settings",
    },
    {
      id: 2,
      name: "Categories",
      href: "/your-bar-admin/categories",
      initial: "C",
      current: current === "categories",
    },
    {
      id: 3,
      name: "Products",
      href: "/your-bar-admin/products",
      initial: "P",
      current: current === "products",
    },
    {
      id: 4,
      name: "Tables",
      href: "/your-bar-admin/tables",
      initial: "T",
      current: current === "tables",
    },
    {
      id: 5,
      name: "Orders",
      href: "/your-bar-admin/orders",
      initial: "O",
      current: current === "orders",
    },
    {
      id: 6,
      name: "FunFacts",
      href: "/your-bar-admin/fun-facts",
      initial: "F",
      current: current === "fun-facts",
    },
    {
      id: 7,
      name: "Jokes",
      href: "/your-bar-admin/jokes",
      initial: "J",
      current: current === "jokes",
    },
  ];

  const router = useRouter();
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const page = [...navigationPages, ...yourBarPages].find(
    (page) => page.current
  );

  useEffect(() => {
    (async function () {
      if (status === "loading") {
        setIsLoading(true);
        return;
      }
      if (
        (status !== "authenticated" && status !== "loading") ||
        new Date() > new Date(session?.expires)
      ) {
        await router.push("./login");
        return;
      }
      setIsLoading(false);
    })();
  }, [session, status, router]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="bg-shark-950">
        <AdminSidebar
          navigationPages={navigationPages}
          yourBarPages={yourBarPages}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <AdminNavbar setSidebarOpen={setSidebarOpen} page={page} />
        <main className="min-h-screen bg-shark-950 lg:py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
