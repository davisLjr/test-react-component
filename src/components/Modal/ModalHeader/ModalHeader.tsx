import React from "react";
import {ModalChildrenProps} from "../Modal";

export default function ModalHeader({children}: ModalChildrenProps) {
  return <div className="modal-header">{children}</div>;
}
