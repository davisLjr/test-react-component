import React from "react";
import {render} from "@testing-library/react";

import Calendar from "./Calendar";

describe("Calendar", () => {
  test("renders the Calendar component", () => {
    render(
      <>
        <Calendar
          date={{month: 8, year: 2024}}
          activeDays={[
            {day: 1, title: "Nombre del evento A."},
            {day: 10, title: "Nombre del evento B."},
            {day: 25, title: "Nombre del evento C."},
          ]}
        ></Calendar>
      </>,
    );
  });
});
