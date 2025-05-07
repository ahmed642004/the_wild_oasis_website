"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") || "all";
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border text-accent-50 border-primary-800 flex">
      <Button onClick={handleFilter} activeFilter={activeFilter} filter="all">
        All
      </Button>
      <Button onClick={handleFilter} activeFilter={activeFilter} filter="small">
        1&mdash;3 guests
      </Button>
      <Button
        onClick={handleFilter}
        activeFilter={activeFilter}
        filter="medium"
      >
        4&mdash;7 guests
      </Button>
      <Button onClick={handleFilter} activeFilter={activeFilter} filter="large">
        8&mdash;12 guests
      </Button>
    </div>
  );
};
function Button({ children, onClick, activeFilter, filter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => onClick(filter)}
    >
      {children}
    </button>
  );
}
export default Filter;
