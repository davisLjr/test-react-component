import React, { ReactNode } from "react";
import classNames from "classnames";

export interface CardBoxData {
  children?: ReactNode | ReactNode[];
  className?: string;
  isHorizontal?: boolean;
  isThematic?: boolean;
  isVerticalUbordered?: boolean;
  isMap?: boolean;
  isHorizontalUnbordered?: boolean;
  isPanelVertical?: boolean;
  isPanelHorizontal?: boolean;
  isPanelAside?: boolean;
}

export default function Card ({ className, children, isHorizontal = false, isThematic = false, isVerticalUbordered = false, isMap = false, isHorizontalUnbordered = false, isPanelHorizontal = false, isPanelVertical = false, isPanelAside = false }: CardBoxData) {
  const combinedClassName = classNames(
    {
      "card-horizontal": isHorizontal,
      "card-horizontal card-simple card-lg": isThematic,
      "card-simple": isVerticalUbordered,
      "card-map": isMap,
      "unbordered": isHorizontalUnbordered,
      "card-simple panel-vertical": isPanelVertical,
      "card-simple panel-horizontal": isPanelHorizontal,
      "card-simple panel-lateral": isPanelAside,
    },
    className,
  );

  return (
    <div className={`card${combinedClassName ? ` ${combinedClassName}` : ""}`}>
      {children}
    </div>
  );
}

