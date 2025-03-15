import Encryption from "@/Component/sub/Encryption";
// import CardSlider from "@/Component/sub/CardSlider";
import Hero from "@/Component/main/Hero";
import Footer from "@/Component/main/Footer";
import Card from "@/Component/main/Card";
// import "./app/gloals.css"

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">

        <Hero />
        <Encryption />
        {/* <CardSlider/> */}
        <Card/>
        <Footer/>
      </div>
    </main>
  );
}
