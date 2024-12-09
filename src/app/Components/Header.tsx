import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Iprops{
    title:string
}

export default function HeroSection(props:Iprops) {
  return (
    <main>
      {/* Hero section */}
      <section className="shop-hero h-[316px] flex flex-col justify-center items-center">
            {/* Logo */}
            <img src="/logo.png" alt="logo" />

            {/* Title */}
            <h1 className="text-4xl">{props.title}</h1>

            {/* Link to Home Page*/}
            <Link href="/">Home</Link>
            <ChevronRight />{props.title}
      </section>
    </main>
  );
}