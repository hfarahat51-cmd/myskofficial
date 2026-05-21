import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const products = await prisma.product.findMany({ include: { images: true }, take: 8, orderBy: { createdAt: "desc" } });
  return (
    <div>
      <section className="relative min-h-[80vh] px-4">
        <div className="mx-auto max-w-7xl py-24">
          <Image src="/msyk-logo.png" alt="MSYK Luxury Streetwear" width={220} height={88} className="h-12 w-auto object-contain opacity-90" />
          <p className="mt-4 text-xs tracking-[0.35em] text-zinc-400">NEW ERA DROP 26</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold uppercase leading-[0.9] md:text-7xl">Luxury streetwear built for the future.</h1>
          <p className="mt-5 max-w-xl text-zinc-400">Dark palettes, clean fits, oversized silhouettes.</p>
          <div className="mt-8 flex gap-4"><Link href="/shop" className="rounded-full bg-white px-7 py-3 text-black">Shop Now</Link></div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10"><h2 className="mb-6 text-2xl">Trending Products</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div></section>
    </div>
  );
}
