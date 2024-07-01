"use client";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import ProgressBar from "@/components/ProgressBar";
import HorizontalScroll from "@/components/services_components/HorizontalScroll";
import Information from "@/components/services_components/Information";
import Service from "@/components/services_components/Service";
import ServiceHeading from "@/components/services_components/ServiceHeading";
import { HEALTHCARE_LIFE_SCIENCES_SERVICES } from "@/lib/constants";
import { HEALTHCARE_LIFE_SCIENCES_INFORMATION } from "@/lib/constants";

export default function Page() {
  return (
    <div className="min-w-full min-h-full">
      <ProgressBar />
      <div className="min-w-full min-h-full xl:px-14 px-10 py-14">
        <Service />
        <ServiceHeading description={`Combining science, technology and, innovative thinking to redefine the future of care.`}
        title={`Healthcare and Life Sciences`} />
        <HorizontalScroll data={HEALTHCARE_LIFE_SCIENCES_SERVICES} />
        <Information data = {HEALTHCARE_LIFE_SCIENCES_INFORMATION} />
      </div>
      <Capabilities />
      <Footer />
    </div>
  );
}
