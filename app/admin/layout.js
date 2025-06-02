"use client";
import AdminHeader from "@/components/Header-admin/AdminHeader";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ProductProvider } from "@/context/admin/ProductContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
export default function AdminLayout({ children }) {
  const { currentUser } = useSelector((state) => state.user);
  const router = useRouter();

  if (currentUser?.role === "admin") {
    router.push("/");
    return null;
  }
  return (
    <html>
      <body>
        <SidebarProvider>
          <ProductProvider>
            <section className="flex w-full">
              <Sidebar />
              <div className="flex flex-col max-h-full w-full overflow-y-auto">
                <AdminHeader />
                <main className="flex flex-col lg:mt-0 mb-2">{children}</main>
              </div>
            </section>
          </ProductProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
