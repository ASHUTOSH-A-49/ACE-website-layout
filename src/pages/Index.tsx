import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreActivities from "@/components/CoreActivities";
import ProjectShowcase from "@/components/ProjectShowcase";
import AlumniSpotlight from "@/components/AlumniSpotlight";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <CoreActivities />
      <ProjectShowcase />
      <AlumniSpotlight />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Index;
