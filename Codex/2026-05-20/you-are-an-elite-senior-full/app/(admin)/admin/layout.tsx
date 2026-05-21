import Link from "next/link";
import Image from "next/image";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[240px,1fr]">
        <aside className="rounded-2xl border border-white/10 p-4">
          <Image src="/msyk-logo.png" alt="MSYK" width={120} height={40} className="mb-6 h-8 w-auto" />
          <div className="space-y-2 text-sm">
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/products" className="block">Products</Link>
            <Link href="/admin/orders" className="block">Orders</Link>
            <Link href="/admin/customers" className="block">Customers</Link>
            <Link href="/admin/content" className="block">CMS</Link>
            <Link href="/admin/settings" className="block">Settings</Link>
          </div>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}
