import React from "react";
import {render} from "@testing-library/react";
import StepList from "./StepList";

function StepsListComponent() {
  const stepsData = [
    {
      title: "Step 1",
      description: "Description for Step 1",
    },
    {
      title: "Step 2",
      description: "Description for Step 2",
    },
    {
      title: "Step 3",
      description: "Description for Step 3",
    },
  ];

  return (
    <>
      <StepList
        size="large"
        isLight={true}
        isNumber={true}
        stepsList={stepsData}
      />
    </>
  );
}

describe("ProgressBar", () => {
  test("renders the ProgressBar component", () => {
    render(<StepsListComponent />);
  });
});
