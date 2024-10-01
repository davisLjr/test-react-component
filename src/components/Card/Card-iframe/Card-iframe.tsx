import React, { ReactNode } from "react";

export interface CardImgData {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export default function CardIframe ({ className, children }: CardImgData) {

  return (
    <div className={`card-iframe${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}

