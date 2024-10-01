import React, {ReactNode} from "react";

export interface CardLinkData
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode | ReactNode[];
  className?: string;
  path?: string;
  allClickable?: boolean;
}

export default function CardLink({
  className,
  children,
  allClickable = false,
  path = "#",
  ...props
}: CardLinkData) {
  return (
    <a
      href={path}
      className={`${allClickable ? "card-title-link" : ""}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
