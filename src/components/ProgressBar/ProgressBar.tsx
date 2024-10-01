import React from "react";

export interface ProgressBarProps {
  value: number;
  isSuccess?: boolean;
  isInfo?: boolean;
  description?: string;
}

export default function ProgressBar({
  value,
  isSuccess,
  isInfo,
  description,
}: ProgressBarProps) {
  if (!isSuccess && !isInfo) {
    isSuccess = true; //esta condicional asigna isSuccess en true al no pasarle ninguna props al componente
  }

  const clasess = `${isSuccess ? "bg-success" : ""} ${isInfo ? "bg-info" : ""}`;

  return (
    <>
      {description && <p className="steps">{description}</p>}
      <div className="progress">
        <div
          className={`progress-bar ${clasess}`}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{width: `${value}%`}}
        ></div>
      </div>
    </>
  );
}
