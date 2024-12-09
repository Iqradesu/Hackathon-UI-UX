import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Iprops {
  title: string;
}

export default function HeroSection(props: Iprops) {
  return (
    <main>
      {/* Hero section */}
      <section className="shop-hero h-[316px] flex flex-col justify-center items-center">
        {/* Logo */}
        <img src="/logo.png" alt="logo" />
           <h4 className="text-4xl">{props.title}</h4>
        {/* Link to Home Page */}
        <Link href="/" className="flex items-center text-lg">
          Home
          <ChevronRight className="ml-2" />
          <span className="ml-2">{props.title}</span>
        </Link>
      </section>
    </main>
  );
}
