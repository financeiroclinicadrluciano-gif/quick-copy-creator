import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Methodology from "@/components/Methodology";
import Differentials from "@/components/Differentials";
import Consultation from "@/components/Consultation";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-deep)" }}>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Methodology />
      <Differentials />
      <Consultation />
    </div>
  );
};

export default Index;
