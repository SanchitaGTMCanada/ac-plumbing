import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-end">

      <Image
        src="/assets/hero/hero.jpg"
        alt="Plumbing Service"
        width={650}
        height={720}
        priority
      />

    </div>
  );
}