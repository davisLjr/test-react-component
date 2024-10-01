import React, {ReactNode} from "react";
import {Sizes} from "../../utils/utils.js";
import "./Access.scss";
import AccessLink from "./AccessLink/AccessLink";
import AccessContent from "./AccessContent/AccessContent";
import AccessTitle from "./AccessTitle/AccessTitle";
import Accessdescription from "./AccessDescription/AccessDescription";

export interface AccessData {
  size?: Sizes;
  className?: string;
  children?: ReactNode | ReactNode[];
  url?: string;
  title?: string;
  description?: string;
}

export default function Access({
  size,
  url,
  title = "Titulo por defecto",
  description = "Descripción por defecto",
  className,
  children,
}: AccessData) {
  return (
    <AccessLink
      url={url}
      className={`${className ? className : ""}`}
      size={size}
    >
      {children}
      <AccessContent>
        <AccessTitle title={title} />
        <Accessdescription description={description} />
      </AccessContent>
    </AccessLink>
  );
}

{
  /* <Access size="small" />
<Access /> */
}
