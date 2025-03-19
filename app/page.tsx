
import Footer from "@/Component/main/Footer";
import Hero from "@/Component/main/Hero";
import Navbar from "@/Component/main/Navbar";
export default function Home() {
  return (
    <main className="h-full w-auto overflow-x-hidden px-2">
      <div className="flex flex-col">
        <Navbar/>
        <Hero />
       
        <Footer />
      </div>
    </main>
  );
}
