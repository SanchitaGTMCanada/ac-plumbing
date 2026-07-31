import Container from "@/components/ui/Container/Container";
import AboutContent from "./AboutContent";
import AboutImages from "./AboutImages";

export default function About() {
  return (
    <section className="relative py-36 overflow-hidden bg-white">

      {/* Background Decorations */}

      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#123B67]/5 blur-[150px]" />

      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C89B3C]/10 blur-[150px]" />

      <Container>

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <AboutImages />

          <AboutContent />

        </div>

      </Container>

    </section>
  );
}