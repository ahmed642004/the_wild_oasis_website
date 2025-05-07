import React from "react";
import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";

const CabinList = async ({ filter }) => {
  const cabins = await getCabins();

  if (!cabins.length) return null;
  const cabinFilters = {
    all: () => cabins,
    small: () => cabins.filter((cabin) => cabin.maxCapacity <= 3),
    medium: () =>
      cabins.filter(
        (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
      ),
    large: () => cabins.filter((cabin) => cabin.maxCapacity >= 8),
  };

  const filteredCabins = cabinFilters[filter]?.() ?? cabinFilters.all();
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin, index) => (
        <CabinCard cabin={cabin} key={cabin.id} priority={index === 0} />
      ))}
    </div>
  );
};

export default CabinList;
