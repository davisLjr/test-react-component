import React, { ReactNode } from "react";

export interface CollapseBoxData {
  id?: string;
  children?: ReactNode | ReactNode[];
  className?: string;
}

export default function CollapseBox ({ className, children, id }: CollapseBoxData) {

  return (
    <div className={`accordion ${className ? className : ""}`} id={id}>
      {children}
    </div>
  );
}

// id="accordionExample"