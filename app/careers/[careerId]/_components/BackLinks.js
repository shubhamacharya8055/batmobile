import Link from "next/link";

export default function BackLinks() {
  return (
    <div className='w-fit h-10 flex items-center gap-1 justify-center xl:text-xs text-sm text-teal'>
                <Link className='hover:underline underline-offset-2 hover:text-darkBlue' href={"/"} > Home </Link>
                <span className='mt-[1.9px]'>&gt;</span>
                <Link className='hover:underline underline-offset-2 hover:text-darkBlue' href={"/careers"} > Careers </Link>
                <span className='mt-[1.9px]'>&gt;</span>
                <p className='font-semibold mt-[1.5px] text-darkBlue'>Job Details</p>
    </div>
  )
}
