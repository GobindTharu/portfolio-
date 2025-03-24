import {Footer} from "@/Component/ui/main/Footer";
import Hero from "@/Component/ui/main/Hero";
import Navbar from "@/Component/ui/main/Navbar";
export default function Home() {
  return (
    <main className="h-full w-auto overflow-x-hidden">
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
