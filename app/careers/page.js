"use client";

import Footer from "@/components/Footer";
import CareerHeading from "@/components/careers/CareerHeading";
import Cities from "@/components/careers/Cities";
import FilterdJobs from "@/components/careers/FilterdJobs";
import BackToHome from "@/components/careers/Home";
import NoJobPosting from "@/components/careers/NoJobPosting";
import SkillComponent from "@/components/careers/SkillComponent";
import WorkPreferences from "@/components/careers/WorkPreferences";
import { Input } from "@/components/ui/input";
import { jobPostings } from "@/lib/constants";
// import Image from "next/image";
import dynamic from 'next/dynamic';
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
import { useEffect, useState } from "react";


export default function Page() {
  const [filteredJobs, setFilteredJobs] = useState([]); // Store filtered results
  const [showResults, setShowResults] = useState(false); // Control results visibility

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([]);
  const [workType, setWorkType] = useState([]);

  useEffect(() => {
    if (showResults) {
      handleFindClick();
    }
  }, [workType, showResults]);

  const handleFindClick = () => {
    if (!keyword && !location && skills.length === 0 && workType.length === 0) {
      setFilteredJobs([]);
      setShowResults(true);
      return;
    }

    const filtered = jobPostings.filter((job) => {
      const keywordMatch = keyword
        ? job.keyword.toLowerCase().includes(keyword.toLowerCase())
        : true;
      const locationMatch = location
        ? job.location.toLowerCase() === location.toLowerCase()
        : true;
      const skillsMatch =
        skills.length > 0
          ? skills.some((skill) =>
              job.skills.some(
                (jobSkill) => jobSkill.toLowerCase() === skill.toLowerCase()
              )
            )
          : true;
      const workTypeMatch =
        workType.length > 0 ? workType.includes(job.type) : true;

      console.log(workTypeMatch);

      return keywordMatch && locationMatch && skillsMatch && workTypeMatch;
    });

    const sortedJobs =
      workType.length > 0
        ? filtered.sort((a, b) => {
            const typeOrder = { remote: 0, office: 1, openToRelocation: 2 };
            return typeOrder[a.type] - typeOrder[b.type];
          })
        : filtered;

    setFilteredJobs(sortedJobs);
    setShowResults(true);
  };

  return (
    <div className="min-w-full min-h-full ">
      <div className="w-full h-full xl:px-20 py-5 px-16">
        {/* back to home button */}
        <BackToHome />

        {/* Career heading */}

        <CareerHeading />

        {/* Search Bar */}

        <div
          className="w-full mt-36 flex xl:flex-row flex-col gap-y-5 xl:items-center"
          id="JobSearch"
        >
          {/* Search Bar Items */}
          <div className="flex flex-col gap-y-4 xl:w-[90%] w-full">
            <form className="flex flex-col xl:flex-row xl:gap-x-16 gap-y-8 xl:gap-y-0 w-full">
              <div className="flex flex-col gap-y-4 xl:w-1/4 w-full text-darkBlue">
                <label className="text-xs tracking-[4px] uppercase font-bold ">
                  Keyword or Job id
                </label>
                <Input
                  className="placeholder:text-sm"
                  type="text"
                  placeholder="Keyword"
                  value={keyword}
                  onChange={({ target }) => setKeyword(target.value)}
                />
              </div>

              <Cities location={location} setLocation={setLocation} />

              <SkillComponent skills={skills} setSkills={setSkills} />
            </form>

            <WorkPreferences workType={workType} setWorkType={setWorkType} />
          </div>

          {/* button */}
          <div className="xl:w-[10%] w-full ">
            <button
              className="w-full bg-teal text-white rounded-full py-2 px-2 capitalize tracking-wide"
              onClick={handleFindClick}
            >
              find
            </button>
          </div>
        </div>

        {/* Jobs Listings */}
        <>
          {showResults && (
            <>
              {filteredJobs.length > 0 ? (
                <FilterdJobs filteredJobs={filteredJobs} />
              ) : (
                <NoJobPosting />
              )}
            </>
          )}
        </>

        {/* People Working  Image */}

        <div className="w-full relative xl:aspect-video aspect-square my-20">
          <DynamicImage src={"/Group-min.jpg"} fill className="object-cover" />
        </div>
      </div>

      <Footer />
    </div>

   
  );
}
