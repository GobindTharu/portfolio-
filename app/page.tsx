import Encryption from "@/Component/sub/Encryption";
import Hero from "@/Component/main/Hero";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Encryption />
      </div>
    </main>
  );
}
