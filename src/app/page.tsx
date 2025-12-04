import About from "@/components/About";
import Anime from "@/components/Anime";
import Callto from "@/components/Callto";
import Chiffre from "@/components/Chiffre";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Anime />
      <Callto />
      <About />
      <Chiffre />
      <Services />
      <Products />
      <Clients />
    </div>
  );
}
