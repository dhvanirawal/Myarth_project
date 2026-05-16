import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import About from "@/components/About";
import Programs from "@/components/Programs";
import ImageStrip from "@/components/ImageStrip";
import Membership from "@/components/Membership";
import Donate from "@/components/Donate";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <About />
      <Programs />
      <ImageStrip />
      <Membership />
      <Donate />
      <Gallery />
      <Footer />
    </main>
  );
}
