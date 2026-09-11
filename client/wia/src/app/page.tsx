import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ClientBar from "@/components/ClientBar";
import Strengths from "@/components/Strengths";
import ScaleStats from "@/components/ScaleStats";
import Performance from "@/components/Performance";
import Process from "@/components/Process";
import Solutions from "@/components/Solutions";
import Cases from "@/components/Cases";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ClientBar />
        <Strengths />
        <ScaleStats />
        <Performance />
        <Process />
        <Solutions />
        <Cases />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
