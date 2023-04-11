import Analytics from "./Components/Analytics/Analytics";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <div className="bg-blackPrimary min-h-screen">
      <Header />
      <Hero />
      <Analytics />
    </div>
  );
}
