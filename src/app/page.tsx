
import { HeroSearch } from "@/components/home/HeroSearch";
import { Steps } from "@/components/home/Steps";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSearch />
      <Steps />
    </div>
  );
}
