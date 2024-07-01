"use client";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import ProgressBar from "@/components/ProgressBar";
import HorizontalScroll from "@/components/services_components/HorizontalScroll";
import Information from "@/components/services_components/Information";
import Service from "@/components/services_components/Service";
import ServiceHeading from "@/components/services_components/ServiceHeading";
import { CX_DESIGN_SERVICES } from "@/lib/constants";
import { CX_DESIGN_INFORMATION } from "@/lib/constants";

export default function Page() {
  return (
    <div className="min-w-full min-h-full">
      <ProgressBar />
      <div className="min-w-full min-h-full xl:px-14 px-10 py-14">
        <Service />
        <ServiceHeading description={`The most important aspect of business.`}
        title={`Customer Experience and Design`} />
        <HorizontalScroll data={CX_DESIGN_SERVICES} />
        <Information data = {CX_DESIGN_INFORMATION} />
      </div>
      <Industries title="Our Services" description={""} />
      <Footer />
    </div>
  );
}
