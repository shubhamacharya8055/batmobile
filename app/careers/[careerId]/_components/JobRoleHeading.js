"use client";

import { Building, EarthIcon, HomeIcon } from "lucide-react";

export default function JobRoleHeading({ job }) {
  return (
    <div className="w-fit h-fit xl:mt-24 mt-16 flex flex-col gap-y-5">
      <h1 className="text-6xl font-semibold">{job.keyword}</h1>
      <div className="uppercase flex gap-x-2 text-teal font-semibold">
        <p>
          {job.location}
          {", "} India -{" "}
        </p>
        {job.type === "remote" && <p>remote</p>}
        {job.type === "office" && <p>office</p>}
        {job.type === "openToRelocation" && <p>Open to Relocation</p>}
      </div>

      {job.type === "remote" && <HomeIcon className="w-6 h-6 text-darkBlue" />}
      {job.type === "office" && <Building className="w-6 h-6 text-darkBlue" />}
      {job.type === "openToRelocation" && (
        <EarthIcon className="w-6 h-6 text-darkBlue" />
      )}
    </div>
  );
}
