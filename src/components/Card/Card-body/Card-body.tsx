import React, { ReactNode } from "react";

export interface CardBoxData {
  children?: ReactNode | ReactNode[];
  className?: string;
}

export default function CardBody ({ className, children }: CardBoxData) {

  return (
    <div className={`card-body${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}

