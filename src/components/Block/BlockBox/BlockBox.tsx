import React, {ReactNode} from "react";
import {BlockData} from "../Block";

export interface BlockBoxData extends BlockData {
  children?: ReactNode | ReactNode[];
  style?: React.CSSProperties;
}

export default function BlockBox({className, children, style}: BlockBoxData) {
  const defaultStyle = !style ? {top: "48px"} : {};

  return (
    <div
      className={`card card-block position-sticky ${
        className ? className : ""
      }`}
      style={{...defaultStyle, ...style}}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}
//Seguramente al tener el componente card, se modifique el div con clase card
{
  /* <BlockBox
className="my-custom-class"
style={{ top: "60px" }} // Definir el estilo directamente aquí
>
<p>This is the content of BlockBox with custom top of 60px.</p>
</BlockBox> */
}
