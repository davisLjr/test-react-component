import React, {ReactNode} from "react";

export type StepperProps = {
  title?: string;
  nextStepTitle?: string;
  steps?: number;
  activeStep?: number;
  children?: ReactNode | ReactNode[];
};

export default function Stepper({
  title = "Nombre del paso",
  nextStepTitle = "Nombre del paso 3",
  steps = 5,
  activeStep = 2,
  children,
}: StepperProps) {
  return (
    <>
      <div className="stepper">
        <h2 className="step-title">{title}</h2>
        <p className="step-next">Paso siguiente: {nextStepTitle}</p>
        {children}
        <div className="steps">
          {Array.from({length: steps}, (_, index) => (
            <div
              key={index}
              className={`step ${index <= activeStep - 1 ? "active" : ""}`}
            ></div>
          ))}
        </div>
        <span className="step-text">
          Paso {activeStep} de {steps}
        </span>
      </div>
    </>
  );
}
