import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Chains from "@/components/Chains";
import Features from "@/components/Features";
import BiggWin from "@/components/BiggWin";
import FCards from "@/components/FCards";
import CryptoCards from "@/components/CryptoCards";
import Premium from "@/components/Premium";
import FAQ from "@/components/FAQ";
import Signup from "@/components/Signup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Chains />
      <Features />
      <BiggWin />
      <FCards />
      <CryptoCards />
      <Premium />
      <FAQ />
      <Signup />
      <Footer />
    </div>
  );
}
