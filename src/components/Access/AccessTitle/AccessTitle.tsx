import React from "react";
import {AccessData} from "../Access";

export interface AccessTitleData extends AccessData {
  title: string;
}

export default function AccessTitle({title, className}: AccessTitleData) {
  return (
    <span className={`access-title  ${className ? className : ""}`}>
      {title}
    </span>
  );
}
// Remplazar cuando tenga el componente tipografia
