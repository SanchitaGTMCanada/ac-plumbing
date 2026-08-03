import Button from "@/components/ui/Button/Button";

export default function ServicesContent() {
  return (
    <div className="mx-auto mb-20 mt-60 text-center">

      <span className="inline-flex rounded-full bg-[#123B67]/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#123B67]" style={{ padding:"10px", marginTop:"10px" }}>
        Our Services
      </span>

      <h2 className="mt-8 text-[62px] font-extrabold leading-none text-[#123B67]">
        Complete Home
        <br />
        <span className="text-[#C89B3C]">
          Plumbing Solutions
        </span>
      </h2>

      <p className="mx-auto mt-8 text-lg leading-9 text-[#667085]" style={{ marginBottom: "20px" }}>
        We provide premium residential and commercial plumbing,
        heating and boiler services with licensed technicians,
        transparent pricing and fast emergency support.
      </p>

      {/* <div className="mt-10">
        <Button href="/services">
          Explore Services
        </Button>
      </div> */}

    </div>
  );
}