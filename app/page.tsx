import Encryption from "@/Component/sub/Encryption";
import Hero from "@/Component/main/Hero";
import Footer from "@/Component/main/Footer";
import Card from "@/Component/main/Card";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">

        <Hero />
        <Encryption />
        <Card/>
        <Footer/>
      </div>
    </main>
  );
}
