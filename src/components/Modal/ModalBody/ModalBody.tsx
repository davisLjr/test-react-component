import React from "react";
import {ModalChildrenProps} from "../Modal";

export default function ModalBody({children}: ModalChildrenProps) {
  return <div className="modal-body">{children}</div>;
}
