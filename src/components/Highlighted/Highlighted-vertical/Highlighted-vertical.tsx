import React, { ReactNode } from "react";
import Card from "../../Card/Card-box/Card";

export type HighlightedVerticalProps = {
  className?: string;
  children: ReactNode | ReactNode[]
  ariaLabel?: string;
}

export default function HighlightedVertical ({ className, children, ariaLabel }: HighlightedVerticalProps) {
  return (
    <Card className={className} isPanelVertical>
      {ariaLabel && <p className="sr-only">{ariaLabel}</p>}
      {children}
    </Card>
  );
}