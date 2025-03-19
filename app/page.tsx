
import Footer from "@/Component/main/Footer";
import Hero from "@/Component/main/Hero";
export default function Home() {
  return (
    <main className="h-full w-auto overflow-x-hidden px-5">
      <div className="flex flex-col">
        <Hero />
       
        <Footer />
      </div>
    </main>
  );
}
