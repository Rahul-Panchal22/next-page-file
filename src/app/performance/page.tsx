import Hero from "@/components/hero";
import PerformanceImg from "@/public/performance.jpg";
const PerformancePage = () => {
  return (
    <Hero
      title="We serve high performance applications"
      imgData={PerformanceImg}
      imgAlt="welding"
    />
  );
};

export default PerformancePage;
