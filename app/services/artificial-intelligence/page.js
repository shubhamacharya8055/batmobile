"use client";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import ProgressBar from "@/components/ProgressBar";
import HorizontalScroll from "@/components/services_components/HorizontalScroll";
import Information from "@/components/services_components/Information";
import Service from "@/components/services_components/Service";
import ServiceHeading from "@/components/services_components/ServiceHeading";
import { ARTIFICIAL_INTELLIGENCE, IMAGES } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  return (
    <div className="min-w-full min-h-full">
      <ProgressBar />
      <div className="min-w-full min-h-full xl:px-14 px-10 py-14">
        <Service />
        <ServiceHeading />
        <HorizontalScroll />
        <Information />
      </div>
      <Industries title="Our Services" description={""} />
      <Footer />
    </div>
  );
}
