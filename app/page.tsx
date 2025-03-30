import {Footer} from "@/Component/ui/main/Footer";
import Hero from "@/Component/ui/main/Hero";
import Navbar from "@/Component/ui/main/Navbar";
import Notice from "@/Component/ui/sub/Notice";
import DisableRightClick from "@/Component/ui/sub/RightClickDisable";
export default function Home() {
  return (
    <main className="h-full w-auto overflow-x-hidden">
      <DisableRightClick/>
      <div className="flex flex-col">
        <Notice />
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
