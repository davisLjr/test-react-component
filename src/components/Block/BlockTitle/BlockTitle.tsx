import React, { ReactNode } from "react";
import { BlockData } from "../Block";

export interface BlockTitleData extends BlockData {
  title: string;
  children?: ReactNode | ReactNode[];
}

export default function BlockTitle ({ title, className, children }: BlockTitleData) {
  return (
    <h2 className={`block-title ${className ? className : ""}`}>
      {title}
      {children}
    </h2>
  );
}
// Remplazar cuando tenga el componente tipografia
