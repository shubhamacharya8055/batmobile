"use client";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import ProgressBar from "@/components/ProgressBar";
import HorizontalScroll from "@/components/services_components/HorizontalScroll";
import Information from "@/components/services_components/Information";
import Service from "@/components/services_components/Service";
import ServiceHeading from "@/components/services_components/ServiceHeading";
import { CLOUD_PROCESS } from "@/lib/constants";
import { CLOUD_PROCESS_INFORMATION } from "@/lib/constants";

export default function Page() {
  return (
    <div className="min-w-full min-h-full">
      <ProgressBar />
      <div className="min-w-full min-h-full xl:px-14 px-10 py-14">
        <Service />
        <ServiceHeading description={`Empowering enterprises in their digital transformation efforts.`}
        title={`Cloud and Infrastructure Services`} />
        <HorizontalScroll data={CLOUD_PROCESS} />
        <Information data = {CLOUD_PROCESS_INFORMATION} />
      </div>
      <Industries title="Our Services" description={""} />
      <Footer />
    </div>
  );
}
