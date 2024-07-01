"use client";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import HorizontalScroll from "@/components/services_components/HorizontalScroll";
import Information from "@/components/services_components/Information";
import Service from "@/components/services_components/Service";
import ServiceHeading from "@/components/services_components/ServiceHeading";
import { MEDIA_ENTERTAINMENT_SERVICES } from "@/lib/constants";
import { MEDIA_ENTERTAINMENT_INFORMATION } from "@/lib/constants";

export default function Page() {
  return (
    <div className="min-w-full min-h-full">
      <ProgressBar />
      <div className="min-w-full min-h-full xl:px-14 px-10 py-14">
        <Service />
        <ServiceHeading description={`Enabling AI-powered solutions for the media industry.`}
        title={`Media and Entertainment`} />
        <HorizontalScroll data={MEDIA_ENTERTAINMENT_SERVICES} />
        <Information data = {MEDIA_ENTERTAINMENT_INFORMATION} />
      </div>
      <Capabilities />
      <Footer />
    </div>
  );
}
