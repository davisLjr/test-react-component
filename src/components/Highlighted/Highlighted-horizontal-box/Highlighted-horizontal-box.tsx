import React, { ReactNode } from "react";

export type HighlightedHorizontalBoxProps = {
  className?: string;
  children: ReactNode | ReactNode[];
  isBgLight?: boolean;
};

export default function HighlightedHorizontalBox ({
  className,
  children,
  isBgLight,
}: HighlightedHorizontalBoxProps) {
  return (
    <div className={`panel-horizontal-content${isBgLight ? " bg-light" : ""}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
