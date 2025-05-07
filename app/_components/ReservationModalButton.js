// app/_components/ReservationModalButton.js
"use client";
import Modal from "./Modal";
import Reservation from "./Reservation";

export default function ReservationModalButton({ settings, bookedDates, cabin, user }) {
  return (
    <Modal>
      <Modal.Open opens="reservation-modal">
        <button
          className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all mb-6 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
        >
          Open Reservation Form
        </button>
      </Modal.Open>
      <Modal.Window name="reservation-modal">
        <Reservation settings={settings} bookedDates={bookedDates} cabin={cabin} user={user} />
      </Modal.Window>
    </Modal>
  );
}