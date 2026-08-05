
import Hero from "@/components/home/Hero/Hero.jsx";
import About from "@/components/home/About/About.jsx";
import Services from "@/components/home/Services/Services";
import WhyChoose from "@/components/home/WhyChoose/WhyChoose";
import Footer from "@/components/layout/Footer/Footer.jsx";
import Booking from "@/components/booking/Booking";


export default function Home() {
  return (
    <>


      <Hero />
          
           <Services />
            <About />
           <WhyChoose/>
           <Booking/>
           <Footer />

    </>
  );
}