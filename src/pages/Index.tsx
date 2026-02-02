import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Steps from "@/components/Steps";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Faculty from "@/components/Faculty";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-[#1e2842]">
        <Hero />
        <Benefits />
        <Courses />
        <Testimonials />
        <Steps />
        <Faculty />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
