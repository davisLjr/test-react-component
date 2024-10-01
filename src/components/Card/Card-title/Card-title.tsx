import React, { ReactNode, HTMLProps } from "react";

export interface CardTitleData extends HTMLProps<HTMLElement> {
  children?: ReactNode | ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  clearClass?: boolean;
}

export default function CardTitle ({
  className = "",
  children,
  as = "h3",
  clearClass = false,
  ...props
}: CardTitleData) {

  const classes = className ? `card-title ${className}`.trim() : "card-title";

  return clearClass
    ? React.createElement(as, { className, ...props }, children)
    : React.createElement(as, { className: classes, ...props }, children);
}
