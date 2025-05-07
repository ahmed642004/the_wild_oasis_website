// app/_components/Test.js
import ReservationSection from "./ReservationSection";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";

export default async function Test({ cabin }) {
  const [settings, bookedDates, session] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
    auth(),
  ]);
  return (
    <div className="flex justify-center">
      <ReservationSection
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
        user={session?.user}
      />
    </div>
  );
}