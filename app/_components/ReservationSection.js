// app/_components/ReservationSection.js
import ReservationModalButton from "./ReservationModalButton";

export default function ReservationSection({ settings, bookedDates, cabin, user }) {
  return (
    <div className="relative">
      <ReservationModalButton
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
        user={user}
      />
    </div>
  );
}