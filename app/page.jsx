import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Categories from "@/components/Categories";
import EmailCapture from "@/components/EmailCapture";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import EmailPopup from "@/components/EmailPopup";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Categories />
        <EmailCapture />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <EmailPopup />
    </>
  );
}
