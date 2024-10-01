import React from "react";
import {AccessData} from "../Access";

export default function AccessContent({children, className}: AccessData) {
  return (
    <div className={`access-content  ${className ? className : ""}`}>
      {children}
    </div>
  );
}
