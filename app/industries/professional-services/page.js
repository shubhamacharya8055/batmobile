"use client";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import HorizontalScroll from "@/components/services_components/HorizontalScroll";
import Information from "@/components/services_components/Information";
import Service from "@/components/services_components/Service";
import ServiceHeading from "@/components/services_components/ServiceHeading";
import { PROFESSIONAL_SERVICES } from "@/lib/constants";
import { PROFESSIONAL_SERVICES_INFORMATION } from "@/lib/constants";

export default function Page() {
  return (
    <div className="min-w-full min-h-full">
      <ProgressBar />
      <div className="min-w-full min-h-full xl:px-14 px-10 py-14">
        <Service />
        <ServiceHeading description={`Empowering business transformation with tech innovation and delivering exceptional outcomes.`}
        title={`Professional Services and Consulting`} />
        <HorizontalScroll data={PROFESSIONAL_SERVICES} />
        <Information data = {PROFESSIONAL_SERVICES_INFORMATION} />
      </div>
      <Capabilities />
      <Footer />
    </div>
  );
}
