import React, { ReactNode } from "react";

export interface CardBadgeData {
  children?: ReactNode | ReactNode[];
  className?: string;
}

export default function CardBadge ({ className, children }: CardBadgeData) {

  return (
    <div className={`card-badges${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}

