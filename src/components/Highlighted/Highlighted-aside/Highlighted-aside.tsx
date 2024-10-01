import React, { ReactNode } from "react";
import Card from "../../Card/Card-box/Card";

export type HighlightedAsideProps = {
  className?: string;
  children: ReactNode | ReactNode[]
  ariaLabel?: string;
}

export default function HighlightedAside ({ className, children, ariaLabel }: HighlightedAsideProps) {
  return (
    <Card className={className} isPanelAside>
      {ariaLabel && <p className="sr-only">{ariaLabel}</p>}
      {children}
    </Card>
  );
}