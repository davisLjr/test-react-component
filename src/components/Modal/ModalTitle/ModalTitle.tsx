import React from "react";
import {ModalChildrenProps} from "../Modal";

export interface ModalTitleProps extends ModalChildrenProps {
  title: string;
  className?: string;
}

export default function ModalTitle({
  title,
  className,
  children,
}: ModalTitleProps) {
  const titleClass = className ? `modal-title ${className}` : "modal-title";

  return (
    <>
      <h4 className={`${titleClass}`}>{title}</h4>
      {children}
    </>
  );
}
