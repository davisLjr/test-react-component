import React, {HTMLAttributes, ReactNode} from "react";
import classNames from "classnames";

export interface BadgeData extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode | ReactNode[];
  className?: string;
  isSecondary?: boolean;
  isDanger?: boolean;
  isSuccess?: boolean;
  isInfo?: boolean;
  isPrimary?: boolean;
}

export default function Badge({
  className,
  children,
  isSecondary = true,
  isDanger,
  isSuccess,
  isInfo,
  isPrimary,
  ...props
}: BadgeData) {
  const combinedClassName = classNames(
    {
      "badge-secondary": isSecondary,
      "badge-danger": isDanger,
      "badge-success": isSuccess,
      "badge-info": isInfo,
      "badge-primary": isPrimary,
    },
    className,
  );

  return (
    <span
      className={`badge${combinedClassName ? ` ${combinedClassName}` : ""}`}
      {...props}
    >
      {children}
    </span>
  );
}
