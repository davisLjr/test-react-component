import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
import { SizeComponents } from "../../utils/utils";

export type ButtonProps = {
  size?: SizeComponents;
  className?: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isSuccess?: boolean;
  isDanger?: boolean;
  isLink?: boolean;
  isOutlinePrimary?: boolean;
  isOutlineSecondary?: boolean;
  isOutlineSuccess?: boolean;
  isOutlineDanger?: boolean;
  isOutlineLink?: boolean;
  isExpanded?: boolean;
  clearClass?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button ({
  children,
  size,
  className,
  isPrimary,
  isSecondary,
  isSuccess,
  isDanger,
  isLink,
  isOutlinePrimary,
  isOutlineSecondary,
  isOutlineSuccess,
  isOutlineDanger,
  isOutlineLink,
  isExpanded,
  clearClass,
  ...rest
}: ButtonProps) {
  const Element = rest.href ? "a" : "button";

  const sizeClass = size === "xs" ? "btn-xs" : size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";

  const hasStyleClass = isPrimary || isSecondary || isSuccess || isDanger || isLink ||
    isOutlinePrimary || isOutlineSecondary || isOutlineSuccess ||
    isOutlineDanger || isOutlineLink;

  const combinedClassName = classNames(
    sizeClass,
    {
      "btn-primary": isPrimary || !hasStyleClass,
      "btn-secondary": isSecondary,
      "btn-success": isSuccess,
      "btn-danger": isDanger,
      "btn-link": isLink,
      "btn-outline-primary": isOutlinePrimary,
      "btn-outline-secondary": isOutlineSecondary,
      "btn-outline-success": isOutlineSuccess,
      "btn-outline-danger": isOutlineDanger,
      "btn-outline-link": isOutlineLink,
      "btn-block": isExpanded,
    },
    className,
  );

  return (
    <>
      {clearClass ? (
        <Element className={className} {...rest}>
          {children}
        </Element>
      ) :

        <Element className={`btn ${combinedClassName}`} {...rest}>
          {children}
        </Element>}
    </>
  );
};
