import React from "react";
import {AccessData} from "../Access";

export interface AccessLinkData extends AccessData {
  url?: string;
}

export default function AccessLink({
  size,
  children,
  className,
  url,
}: AccessLinkData) {
  const itemClass = size === "small" ? "item-sm" : "";

  return (
    <a
      href={url}
      className={`list-group-item ${itemClass} ${className ? className : ""}`}
    >
      {children}
    </a>
  );
}

//Añadir informacion en caso de usar link de next js o gatsby
