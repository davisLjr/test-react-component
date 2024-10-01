import React, {ReactNode} from "react";

export interface ModalBoxProps {
  children?: ReactNode | ReactNode[];
  tabIndex?: number | -1;
  id: string;
  isModalSm?: boolean;
}

export default function ModalBox({
  children,
  tabIndex,
  id,
  isModalSm,
}: ModalBoxProps) {
  const classes = `modal-dialog modal-dialog-centered ${
    isModalSm ? "modal-sm" : ""
  }`;

  return (
    <div className="modal fade" tabIndex={tabIndex} role="dialog" id={id}>
      <div className={classes} role="document">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
