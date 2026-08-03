import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Result } from "@/components/result";
import { Marquee } from "@/components/marquee";
import { Problems } from "@/components/problems";
import { Belief } from "@/components/belief";
import { Statement } from "@/components/statement";
import { Methodology } from "@/components/methodology";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Differentials } from "@/components/differentials";
import { Positioning } from "@/components/positioning";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingWhatsapp } from "@/components/icons";
import { marquee } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Result />
        <Marquee items={marquee} />
        <Problems />
        <Belief />
        <Statement />
        <Methodology />
        <Marquee items={marquee} reverse duration={34} />
        <Services />
        <About />
        <Differentials />
        <Positioning />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
