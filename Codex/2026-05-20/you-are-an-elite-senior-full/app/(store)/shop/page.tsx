import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/product-card";

export default async function ShopPage() {
  const products = await prisma.product.findMany({ include: { images: true }, orderBy: { createdAt: "desc" } });
  return <div className="mx-auto max-w-7xl px-4 py-10"><h1 className="mb-6 text-3xl">Shop</h1><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div></div>;
}
