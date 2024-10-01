import React, { ReactNode, HTMLProps } from "react";

export interface CollapseBodyData extends HTMLProps<HTMLFormElement> {
  id?: string;
  children?: ReactNode | ReactNode[];
  className?: string;
  dataParent?: string;
  isForm?: boolean;
}

export default function CollapseBody ({ className, children, id, dataParent, isForm, ...formProps }: CollapseBodyData) {
  const bodyProps = isForm ? { ...formProps } : {};

  return (
    <div id={id} className={`collapse ${className ? className : ""}`} data-parent={`${dataParent ? dataParent : ""}`}>
      {isForm ? (
        <form className="card-body" {...bodyProps}>
          {children}
        </form>
      ) : (
        <div className="card-body">
          {children}
        </div>
      )}
    </div>
  );
}

{/* reemplazar cuando se tenga card-body component de tarjetas */ }