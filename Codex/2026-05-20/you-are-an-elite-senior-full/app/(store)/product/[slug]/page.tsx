import { prisma } from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({ where: { slug: params.slug }, include: { images: true } });
  if (!product) return notFound();

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10">
        <Image src={product.images[0]?.url || "https://images.unsplash.com/photo-1445205170230-053b83016050"} alt={product.title} fill className="object-cover" />
      </div>
      <div>
        <h1 className="text-3xl">{product.title}</h1>
        <p className="mt-3 text-2xl">${Number(product.price).toFixed(2)}</p>
        <p className="mt-4 text-zinc-400">{product.description}</p>
        <button className="mt-8 rounded-full bg-white px-8 py-3 text-black">Add to Cart</button>
      </div>
    </div>
  );
}
