import React, { ReactNode, HTMLProps } from "react";

export interface CartHeadlineData extends HTMLProps<HTMLElement> {
  children?: ReactNode | ReactNode[];
  className?: string;
  as?: "p" | "span" | "strong" | "small" | "label";
  clearClass?: boolean;
}

export default function CardHeadline ({
  className = "",
  children,
  as = "p",
  clearClass = false,
  ...props
}: CartHeadlineData) {

  const classes = className ? `card-headline ${className}`.trim() : "card-headline";

  return clearClass
    ? React.createElement(as, { className, ...props }, children)
    : React.createElement(as, { className: classes, ...props }, children);
}
