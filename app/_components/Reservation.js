// app/_components/Reservation.js
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import LoginMessage from "./LoginMessage";

export default function Reservation({ settings, bookedDates, cabin, user }) {
  return (
    <div className="grid xl:grid-cols-2 border border-primary-800">
      <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
      {user ? <ReservationForm cabin={cabin} user={user} /> : <LoginMessage />}
    </div>
  );
}