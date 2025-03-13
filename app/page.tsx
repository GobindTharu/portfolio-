import Encryption from "@/Component/sub/Encryption";
import Hero from "@/Component/main/Hero";
import Footer from "@/Component/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px]">
        <Hero />
        <Encryption />
        <Footer/>
      </div>
    </main>
  );
}
