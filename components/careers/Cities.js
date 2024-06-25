import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { CITIES } from "@/lib/constants";

export default function Cities({location, setLocation}) {

  const handleLocationChange = (selectedValue) => {
    setLocation(selectedValue); 
  };

  return (
    <div className="flex flex-col gap-y-4 xl:w-1/4 w-full text-darkBlue">
      <label className="text-xs tracking-[4px] uppercase font-bold">
        Location
      </label>

      <Select value={location} onValueChange={handleLocationChange} >
        <SelectTrigger>
          <SelectValue placeholder="none" />
        </SelectTrigger>
        <SelectContent>
          {CITIES.map((city) => (
            <SelectItem value={city.value} key={city.value} className = "text-black">
              {city.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
