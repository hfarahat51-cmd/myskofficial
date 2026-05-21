import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return <><Navbar /><main>{children}</main><Footer /></>;
}
