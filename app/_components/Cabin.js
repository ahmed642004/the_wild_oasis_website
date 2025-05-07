import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import React from "react";
import TextExpander from "./TextExpander";
import Image from "next/image";

const Cabin = ({ cabin }) => {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className=" xl:grid xl:grid-cols-[3fr_4fr] gap-20 border border-primary-800 xl:py-3 xl:px-10 mb-24">
      <div className="relative xl:object-cover h-[200px] xl:h-full w-full  xl:scale-[1.15] xl:-translate-x-3">
        <Image fill src={cabin.image} alt={`Cabin ${name}`} />
      </div>

      <div className="py-3 px-10">
        <h3 className="text-accent-100 font-black text-2xl xl:text-7xl mb-5 xl:translate-x-[-254px] bg-primary-950 pt-6 xl:p-6 pb-1 xl:w-[150%]">
          Cabin {cabin.name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cabin;
