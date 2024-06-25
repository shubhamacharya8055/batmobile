import Capabilities from "@/components/Capabilities";
import Careers from "@/components/Careers";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import Landing from "@/components/Landing";
import Partners from "@/components/Partners";
import Rise from "@/components/Rise";
import Scale from "@/components/Scale";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Studies from "@/components/Studies";
import Sustainibility from "@/components/Sustainibility";

export default function Home() {
  return (
    <div className="relative z-10">
        <ScrollToTopButton />
        <Landing />
        <Capabilities />
        <Scale />
        <Industries />
        <Sustainibility />
        <Studies />
        <Rise />
        <Explore />
        <Careers />
        <Partners />
        <Footer />
    </div>
  );
}
