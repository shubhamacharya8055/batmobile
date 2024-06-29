import { jobPostings } from "@/lib/constants"
import BackLinks from "./_components/BackLinks"
import JobRoleHeading from "./_components/JobRoleHeading"
import Technologies from "./_components/Technologies";
import Requirements from "./_components/Requirements";
import ApplyForm from "./_components/ApplyForm";

export default function page({params}) {

    const careerId = Number.parseInt( params?.careerId )

    const Job = jobPostings.find((job) => job.id === +careerId);


  return (
    <div className="min-w-full min-h-full">
            <div className="w-full h-full xl:px-20 py-5 px-16">
                <BackLinks />
                <JobRoleHeading job = {Job}  />
                <div className="grid grid-cols-2 mt-16">
                    <div className="flex flex-col gap-y-8">
                    <Technologies job = {Job} />
                    <Requirements job = {Job} />
                    </div>
                    <ApplyForm job = {Job} />
                </div>
            </div>

    </div>
  )
}
