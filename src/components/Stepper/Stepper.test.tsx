import React from "react";
import {render} from "@testing-library/react";

import Stepper from "./Stepper";

describe("Stepper", () => {
  test("renders the Stepper component", () => {
    render(
      <>
        <Stepper></Stepper>
        <Stepper
          title="titulo de stepper"
          nextStepTitle="Paso 7"
          steps={10}
          activeStep={6}
        ></Stepper>
      </>,
    );
  });
});
