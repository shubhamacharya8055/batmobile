import { Checkbox } from '@/components/ui/checkbox'
import { workPreferences } from '@/lib/constants'
import { Building, Earth, HomeIcon } from 'lucide-react'
import React from 'react'

export default function WorkPreferences({workType,setWorkType}) {
  return (
    <div className="flex xl:flex-row flex-col gap-y-4 xl:gap-x-5">

    {workPreferences.map((work) => (
      <div className="flex xl:items-center space-x-2 text-darkBlue" key={work.label}>
           <Checkbox id={work.value} 
           checked = {workType.includes(work.value)}
           onCheckedChange = {(checked) => {
            setWorkType(prev => (
              checked ? [...prev , work.value] 
              : prev.filter((type) => type !== work.value)
            ))
           }}
           />
           <label
             htmlFor={work.value}
             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
           >
             {work.label}
           </label>
          {work.icon === "home" && <HomeIcon className="w-4 h-4" />}
          {work.icon === "globe" && <Earth className="w-4 h-4" />}
          {work.icon === "office" && <Building className="w-4 h-4" />}
         </div>
         
    ))}
   
  </div>
  )
}
