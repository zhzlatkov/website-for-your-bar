import { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

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
      initial: "W",
      current: current === "products",
    },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const page = [...navigation, ...yourBar].find((page) => page.current);
  return (
    <>
      <div>
        <AdminSidebar
          navigation={navigation}
          yourBar={yourBar}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <AdminNavbar setSidebarOpen={setSidebarOpen} page={page} />
        <main className="py-10 lg:pl-72 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
