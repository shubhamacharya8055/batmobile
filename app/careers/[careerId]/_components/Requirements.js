
export default function Requirements({job}) {
  return (
    <div className="flex flex-col gap-y-3 w-fit h-fit">
        <h2 className="text-xl font-semibold text-darkBlue">Requirements</h2>
        <ul className="flex flex-col gap-y-3 list-disc">
            {job.requirements.map((item) => (
                <li className="text-sm text-darkBlue" key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
