"use client";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import ProgressBar from "@/components/ProgressBar";
import HorizontalScroll from "@/components/services_components/HorizontalScroll";
import Information from "@/components/services_components/Information";
import Service from "@/components/services_components/Service";
import ServiceHeading from "@/components/services_components/ServiceHeading";
import { BUSINESS_PROCESS } from "@/lib/constants";
import { BUSINESS_PROCESS_INFORMATION } from "@/lib/constants";

export default function Page() {
  return (
    <div className="min-w-full min-h-full">
      <ProgressBar />
      <div className="min-w-full min-h-full xl:px-14 px-10 py-14">
        <Service />
        <ServiceHeading description={`Unveiling new ways to disrupt our customers' industries.`}
        title={`Business Process Services`} />
        <HorizontalScroll data={BUSINESS_PROCESS} />
        <Information data = {BUSINESS_PROCESS_INFORMATION} />
      </div>
      <Industries title="Our Services" description={""} />
      <Footer />
    </div>
  );
}
