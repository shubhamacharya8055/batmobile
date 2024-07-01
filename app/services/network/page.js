"use client";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import ProgressBar from "@/components/ProgressBar";
import HorizontalScroll from "@/components/services_components/HorizontalScroll";
import Information from "@/components/services_components/Information";
import Service from "@/components/services_components/Service";
import ServiceHeading from "@/components/services_components/ServiceHeading";
import { NETWORK_SERVICES } from "@/lib/constants";
import { NETWORK_SERVICES_INFORMATION } from "@/lib/constants";

export default function Page() {
  return (
    <div className="min-w-full min-h-full">
      <ProgressBar />
      <div className="min-w-full min-h-full xl:px-14 px-10 py-14">
        <Service />
        <ServiceHeading description={`Reimagining, reinventing, and reshaping the future of networks.`}
        title={`Network Services`} />
        <HorizontalScroll data={NETWORK_SERVICES} />
        <Information data = {NETWORK_SERVICES_INFORMATION} />
      </div>
      <Industries title="Our Services" description={""} />
      <Footer />
    </div>
  );
}
