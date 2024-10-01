import React, { ReactNode } from "react";

export type HighlightedFooterProps = {
  className?: string;
  children?: ReactNode | ReactNode[]
}

export default function HighlightedFooter ({ className, children }: HighlightedFooterProps) {
  return (
    <div className={`panel-footer${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}