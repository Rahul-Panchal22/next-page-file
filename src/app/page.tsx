import Image from "next/image";
import HomeImg from "@/public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero
      title="Professional Cloud Hosting"
      imgData={HomeImg}
      imgAlt="car factory"
    />
  );
}
