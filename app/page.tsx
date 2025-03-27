import {Footer} from "@/Component/ui/main/Footer";
import Hero from "@/Component/ui/main/Hero";
import Navbar from "@/Component/ui/main/Navbar";
import Notice from "@/Component/ui/sub/Notice";
export default function Home() {
  return (
    <main className="h-full w-auto overflow-x-hidden">
      <div className="flex flex-col">
        <Notice />
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
