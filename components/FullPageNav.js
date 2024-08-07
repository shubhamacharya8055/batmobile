"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NAV_LINKS } from "@/lib/constants";
import { useRouter } from "next/navigation";

export default function FullPageNav({ isOpen, setIsOpen }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState({});

  const navRef = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: 200,
      opacity: 0,
      duration: 0.5,
    });
  }, []);

  const handleLinkClick = (targetId) => {
    const careersHref = "careers";

    if (targetId === "#about") {
      router.push("/about-us")
      gsap.to(navRef.current , {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
          setIsOpen(false);
        },
      })
      return;
    }

    if (targetId === careersHref) {
      gsap.to(navRef.current, {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
          setIsOpen(false);
        },
      });
      return;
    }

    const element = document.querySelector(targetId);

    if (element && targetId !== "#about" && element.id !== "about") {
      console.log(targetId)
      gsap.to(navRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setIsOpen(false);
          element.scrollIntoView({ behavior: "smooth" });
        },
      });
    }
  };

  const handleDropdownToggle = (e, index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
    setActiveSubDropdown({});
  };

  const handleSubDropdownToggle = (index, parentIndex) => {
    setActiveSubDropdown({
      ...activeSubDropdown,
      [parentIndex]: activeSubDropdown[parentIndex] === index ? null : index,
    });
  };

  const renderDropdown = (items, parentIndex = null) => (
    <ul className="absolute top-full inset-x-0 z-[99999] text-darkBlue bg-white shadow-md w-full  min-h-screen overflow-y-scroll no-scrollbar divide-y">
      {items.map((item, index) => (
        <li
          key={item.label}
          className="px-9 pr-11 py-8 h-16 flex items-center justify-between relative"
        >
          <Link
            href={item.href}
            className="text-lg font-medium hover:text-red-600"
          >
            {item.label}
          </Link>
          {item.subInfo && item.subInfo.length > 0 && (
            <button
              className="xl:mr-8 border border-gray-300 rounded-full shadow-sm p-2 hover:shadow-md"
              onClick={() => handleSubDropdownToggle(index, parentIndex)}
            >
              {activeSubDropdown[parentIndex] === index ? (
                <ChevronDown className="h-5 w-5 hover:scale-75 mx-2" />
              ) : (
                <ChevronRight className="h-5 w-5 hover:scale-75 mx-2" />
              )}
            </button>
          )}
          {item.subInfo &&
            item.subInfo.length > 0 &&
            activeSubDropdown[parentIndex] === index &&
            renderDropdown(item.subInfo, index)}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`absolute w-full z-[999999] text-darkBlue bg-white top-20 inset-x-0 h-screen transition-transform duration-300 delay-150 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
      ref={navRef}
    >
      {/* <ul className="h-full w-full divide-y divide-gray-300 flex flex-col">
            {NAV_LINKS.map((nav , index) => {

                console.log(nav.href === "/careers")

                return (
                    <li key={nav.label} className="px-11 py-12 h-16 flex items-center justify-between relative">
                    <Link href={nav.href} className="text-lg font-semibold">
                    {nav.label}
                    </Link>
                   {(nav?.info?.length) && <button className="xl:mr-8 border border-gray-300 rounded-full shadow-sm p-2 hover:shadow-md"
                    onClick={() => handleDropdownToggle(index)}
                    >
                     {activeDropdown === 0 ? <ChevronDown className="h-5 w-5 hover:scale-75 mx-2"  /> : <ChevronRight className="h-5 w-5 hover:scale-75 mx-2" /> }   
                    </button>}

                    {nav.info && nav.info.length > 0 && activeDropdown === index && (
                        renderDropdown(nav.info , index)
                    )}
                </li>
                )
            })}
        </ul> */}

      <ul className="h-full w-full divide-y divide-gray-300 flex flex-col">
        {NAV_LINKS.map((nav, index) => {
          return (
            <li
              key={index}
              className="px-11 py-12 h-16 flex items-center justify-between relative"
              onClick={() => handleLinkClick(nav.href.split("/").pop())}
            >
              <Link href={`${nav.href}`} className="text-lg font-semibold">
                {nav.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
