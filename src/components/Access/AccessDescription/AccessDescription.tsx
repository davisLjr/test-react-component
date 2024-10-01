import React from "react";
import {AccessData} from "../Access";

export interface AccessDescriptionData extends AccessData {
  description: string;
}

export default function Accessdescription({
  description,
  className,
}: AccessDescriptionData) {
  return (
    <p className={`access-text  ${className ? className : ""}`}>
      {description}
    </p>
  );
}
// Remplazar cuando tenga el componente tipografia
