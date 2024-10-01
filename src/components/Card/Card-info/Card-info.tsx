import React, {ReactNode} from "react";

export interface CardInfoData {
  children?: ReactNode | ReactNode[];
  className?: string;
}

export default function CardInfo({className, children}: CardInfoData) {
  return (
    <div className={`card-info${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
