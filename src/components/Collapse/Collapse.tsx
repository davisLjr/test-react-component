import React, {ReactNode} from "react";
import Button from "../Button";
import CollapseBody from "./Collapse-body/Collapse-body";

export interface CollapseData {
  id?: string;
  className?: string;
  childrenHead?: ReactNode | ReactNode[];
  childrenBody?: ReactNode | ReactNode[];
  dataToggle?: string;
  dataTarget?: string;
  dataParent?: string;
  isForm?: boolean;
}

export default function Collapse({
  id,
  childrenBody,
  childrenHead,
  dataToggle,
  dataTarget,
  dataParent,
  isForm,
  className,
}: CollapseData) {
  return (
    <div className={`card ${className ? className : ""}`}>
      {" "}
      {/* Reemplazar por componente Card * */}
      <Button
        data-toggle={dataToggle}
        data-target={dataTarget}
        className="card-header collapsed"
        clearClass
      >
        {childrenHead}
      </Button>
      <CollapseBody id={id} dataParent={dataParent} isForm={isForm}>
        {childrenBody}
      </CollapseBody>
    </div>
  );
}
