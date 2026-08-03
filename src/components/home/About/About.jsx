import Container from "@/components/ui/Container/Container";
import AboutContent from "./AboutContent";
import AboutImages from "./AboutImages";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-40">

      {/* ================= Background Blur ================= */}

      {/* Large Blue Glow */}
      <div className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#123B67]/8 blur-[170px]" />

      {/* Large Gold Glow */}
      <div className="absolute -right-56 top-32 h-[520px] w-[520px] rounded-full bg-[#C89B3C]/10 blur-[180px]" />

      {/* Bottom Glow */}
      <div className="absolute left-1/3 bottom-0 h-[320px] w-[320px] rounded-full bg-[#123B67]/6 blur-[130px]" />

      {/* Small Gold Glow */}
      <div className="absolute right-20 bottom-24 h-[220px] w-[220px] rounded-full bg-[#C89B3C]/12 blur-[100px]" />



      {/* ================= Decorative Outline Circles ================= */}

      <div className="absolute -right-44 top-10 h-[620px] w-[620px] rounded-full border border-[#C89B3C]/10" />

      <div className="absolute -left-40 bottom-16 h-[420px] w-[420px] rounded-full border border-[#123B67]/10" />

      <div className="absolute right-32 bottom-10 h-[180px] w-[180px] rounded-full border-[8px] border-[#C89B3C]/10" />

      <div className="absolute left-[40%] top-[15%] h-[120px] w-[120px] rounded-full border border-[#123B67]/10" />



      {/* ================= Floating Dots ================= */}

      <div className="absolute left-[10%] top-[18%] h-5 w-5 rounded-full bg-[#C89B3C]/30" />

      <div className="absolute right-[15%] top-[28%] h-4 w-4 rounded-full bg-[#123B67]/30" />

      <div className="absolute left-[48%] bottom-[20%] h-3 w-3 rounded-full bg-[#C89B3C]/40" />

      <div className="absolute right-[28%] bottom-[12%] h-6 w-6 rounded-full border-4 border-[#123B67]/15" />



      {/* ================= Content ================= */}
<div className="relative z-20 flex justify-center " >
      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-2">

          <AboutContent />

          <AboutImages />

        </div>

      </Container>
</div>
    

    </section>
  );
}