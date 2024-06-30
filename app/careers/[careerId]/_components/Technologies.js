import React from 'react'

export default function Technologies({job}) {
  return (
    <div className='w-fit h-fit flex flex-col gap-y-3'>
        <h2 className='text-xl font-semibold text-darkBlue'>Technologies</h2>
        <div className='flex gap-3 flex-wrap'>
        {job.skills.map((skill) => (
            <p key={skill} className='bg-teal py-1 px-3 rounded-full text-white font-semibold text-sm cursor-pointer'>{skill}</p>
        ))}
        </div>
    </div>
  )
}
