import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Problems } from "@/components/problems";
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
        <Marquee items={marquee} />
        <Problems />
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
