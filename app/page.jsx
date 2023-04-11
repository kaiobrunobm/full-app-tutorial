import Analytics from "./Components/Analytics/Analytics";
import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Newsletter from "./Components/Newsletter/Newsletter";

export default function Home() {
  return (
    <div className="bg-blackPrimary min-h-screen">
      <Header />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}
