import Loading from "../Loading";
import { useRouter } from "next/router";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
import { isAuthorized } from "../../calls/is-authorized.js";
import { useState, useEffect } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function AdminLayout({ current, children }) {
  const navigation = [
    {
      name: "Dashboard",
      href: "/your-bar-admin",
      icon: HomeIcon,
      current: current === "dashboard",
    },
  ];
  const yourBar = [
    {
      id: 1,
      name: "Categories",
      href: "/your-bar-admin/categories",
      initial: "C",
      current: current === "categories",
    },
    {
      id: 2,
      name: "Products",
      href: "/your-bar-admin/products",
      initial: "P",
      current: current === "products",
    },
  ];

  const [isAdmin, setIsAdmin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const page = [...navigation, ...yourBar].find((page) => page.current);

  const router = useRouter();
  useEffect(() => {
    (async function () {
      const response = await isAuthorized();
      if (response.status === 403) {
        return router.push("/login");
      }
      setIsAdmin(true);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isAdmin ? (
        <Loading />
      ) : (
        <div className="bg-gray-200">
          <AdminSidebar
            navigation={navigation}
            yourBar={yourBar}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <AdminNavbar setSidebarOpen={setSidebarOpen} page={page} />
          <main className="py-10 lg:pl-72 min-h-screen bg-white">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      )}
    </>
  );
}
