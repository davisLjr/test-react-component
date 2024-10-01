import React, {ReactNode} from "react";
import Card from "../../Card/Card-box/Card";

export type HighlightedHorizontalProps = {
  className?: string;
  children: ReactNode | ReactNode[];
  ariaLabel?: string;
};

export default function HighlightedHorizontal({
  className,
  children,
  ariaLabel,
}: HighlightedHorizontalProps) {
  return (
    <Card className={className} isPanelHorizontal>
      {ariaLabel && <p className="sr-only">{ariaLabel}</p>}
      {children}
    </Card>
  );
}
