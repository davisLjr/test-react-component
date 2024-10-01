import React from "react";
import {ModalChildrenProps} from "../Modal";

export default function ModalFooter({children}: ModalChildrenProps) {
  return <div className="modal-footer">{children}</div>;
}
