"use client";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import ProgressBar from "@/components/ProgressBar";
import HorizontalScroll from "@/components/services_components/HorizontalScroll";
import Information from "@/components/services_components/Information";
import Service from "@/components/services_components/Service";
import ServiceHeading from "@/components/services_components/ServiceHeading";
import { ARTIFICIAL_INTELLIGENCE } from "@/lib/constants";
import { ARTIFICIAL_INTELLIGENCE_INFORMATION } from "@/lib/constants";

export default function Page() {
  return (
    <div className="min-w-full min-h-full">
      <ProgressBar />
      <div className="min-w-full min-h-full xl:px-14 px-10 py-14">
        <Service />
        <ServiceHeading description={`we help businesses harness the power of AI to optimize operations,
        enhance customer experiences, and drive growth.`}
        title={`Artificial Intelligence`} />
        <HorizontalScroll data={ARTIFICIAL_INTELLIGENCE} />
        <Information data = {ARTIFICIAL_INTELLIGENCE_INFORMATION} />
      </div>
      <Industries title="Our Services" description={""} />
      <Footer />
    </div>
  );
}
