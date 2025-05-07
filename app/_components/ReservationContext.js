"use client";
import React, { createContext, useState, useContext } from "react";

// Create the context
const ReservationContext = createContext();
const initialState = {
  from: undefined,
  to: undefined,
};
// Create a provider component
export const ReservationProvider = ({ children }) => {
  const [selected, setSelected] = useState(initialState);
  const [cabinReminder, setCabinReminder] = useState(null);
  const resetRange = () => setSelected(initialState);

  return (
    <ReservationContext.Provider value={{ selected, setSelected, resetRange,cabinReminder,setCabinReminder }}>
      {children}
    </ReservationContext.Provider>
  );
};

// Custom hook to use the ReservationContext
export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};
