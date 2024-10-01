import React, { ReactNode } from "react";
import { BlockData } from "../Block";

export interface BlockDescriptionData extends BlockData {
  description: string;
  children?: ReactNode | ReactNode[];
}

export default function BlockDescription ({
  description,
  className,
  children,
}: BlockDescriptionData) {
  return (
    <p className={`block-text ${className ? className : ""}`}>{description} {children}</p>
  );
}
// Remplazar cuando tenga el componente tipografia
