import React from "react";
import {SizeComponents} from "../../utils/utils";

export type SpinnerType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "info"
  | "light"
  | "dark";

export interface SpinnerProps {
  type?: SpinnerType;
  size?: SizeComponents;
  isBlock?: boolean;
}
export default function Spinner(props: React.PropsWithChildren<SpinnerProps>) {
  const {type = "info", isBlock, size = "md"} = props;

  let className = `spinner-border text-${type}`;
  if (isBlock) className = `spinner-block text-${type}`;
  if (size && size !== "md") className += ` spinner-border-${size}`;

  return (
    <div className={className} role="status">
      <span className="sr-only">Cargando...</span>
    </div>
  );
}
