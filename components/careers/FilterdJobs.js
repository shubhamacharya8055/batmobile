import { Building, EarthIcon, HomeIcon } from "lucide-react";

export default function FilterdJobs({ filteredJobs }) {
  return (
    <div className="w-full divide-y divide-black mt-8 ">
      {filteredJobs.map((job, index) => (
        <div
          className="flex py-5 justify-between"
          key={`${job.keyword}-${job.location}-${index}`}
        >
          <div className="flex flex-col gap-y-2 w-1/3">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-darkBlue">
                {job.keyword}
              </h1>
              <p className="text-sm text-teal font-semibold">
                {job.location}
                {", "} India
              </p>
            </div>
            {job.type === "remote" && (
              <div className="flex items-center xl:gap-x-2 gap-x-1 text-xs">
                <HomeIcon className="w-6 h-6 text-darkBlue" />
                <p className="text-sm mt-1">- Remote</p>
              </div>
            )}

            {job.type === "office" && (
              <div className="flex items-center xl:gap-x-2 gap-x-1 text-xs">
                <Building className="w-6 h-6 text-darkBlue" />
                <p className="text-sm mt-1">- Office</p>
              </div>
            )}

            {job.type === "openToRelocation" && (
              <div className="flex items-center xl:gap-x-2 gap-x-1 text-xs">
                <EarthIcon className="w-6 h-6 text-darkBlue" />
                <p className="text-sm mt-1">- Open to Relocation</p>
              </div>
            )}
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="w-4/5">
              <h2 className="text-base text-darkBlue hidden xl:block">
                We are the leading global provider of digital platform
                engineering and development services. We are committed to having
                a positive impact on our customers, our employees, and our
                communities...
              </h2>
            </div>

            <button className="bg-teal px-5 w-fit text-white py-3 text-sm rounded-full">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
