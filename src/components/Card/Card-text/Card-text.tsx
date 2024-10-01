import React, {ReactNode, HTMLProps} from "react";

export interface CardTextData extends HTMLProps<HTMLElement> {
  children?: ReactNode | ReactNode[];
  className?: string;
  as?: "p" | "span" | "strong" | "small" | "label";
  clearClass?: boolean;
}

export default function CardText({
  className = "",
  children,
  as = "p",
  clearClass = false,
  ...props
}: CardTextData) {
  const classes = className ? `card-text ${className}`.trim() : "card-text";

  return clearClass
    ? React.createElement(as, {className, ...props}, children)
    : React.createElement(as, {className: classes, ...props}, children);
}
