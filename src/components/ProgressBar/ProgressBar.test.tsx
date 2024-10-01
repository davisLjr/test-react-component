import React, {useState} from "react";
import {render} from "@testing-library/react";
import ProgressBar from "./ProgressBar";

function ProgressBarComponent() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 25);
    }
  };

  const decreaseProgress = () => {
    if (progress > 0) {
      setProgress(progress - 25);
    }
  };

  return (
    <>
      <ProgressBar
        progress={progress}
        increaseProgress={increaseProgress}
        decreaseProgress={decreaseProgress}
        type="bg-success"
      />
      <button onClick={decreaseProgress}>Disminuir</button>
      <button onClick={increaseProgress}>Aumentar</button>
    </>
  );
}

describe("ProgressBar", () => {
  test("renders the ProgressBar component", () => {
    render(<ProgressBarComponent />);
  });
});
