// import { act, renderHook, waitFor } from "@testing-library/react";

import { useAppointments } from "../hooks/useAppointments";
import { AppointmentDateMap } from "../types";

import { createQueryClientWrapper } from "@/test-utils";

const getAppointmentCount = (appointments: AppointmentDateMap) => 
  Object.values(appointments).reduce(
    (runningCount, appointmentsOnDate) =>
      runningCount + appointmentsOnDate.length, 0
  );

test("filter appointments by availability", async () => {
  // test goes here
});
