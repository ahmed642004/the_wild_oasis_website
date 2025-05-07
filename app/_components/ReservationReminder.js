"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  const { selected, resetRange, cabinReminder } = useReservation();
  if (cabinReminder === null || !selected.to || !selected.from) return null;
  const { name } = cabinReminder;

  return (
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.4 }}
  className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-4 md:px-8 md:py-5 rounded-full bg-accent-500 text-primary-800 font-semibold shadow-xl shadow-slate-900 flex items-center gap-4 min-w-[80vw]"
>
  <p className=" text-sm md:text-base">
    <span>👋</span> Don&apos;t forget to reserve your dates on cabin{name}
  </p>
  <button
    className="ml-auto shrink-0 rounded-full p-1 hover:bg-accent-600 transition-all"
    onClick={resetRange}
  >
    <XMarkIcon className="h-5 w-5" />
  </button>
</motion.div>

  );
}

export default ReservationReminder;
