import React, {ReactNode} from "react";
import BlockTitle from "./BlockTitle";
import BlockDescription from "./BlockDescription";
import BlockBox from "./BlockBox";

export interface BlockData {
  className?: string;
}

export interface BlockComponentData extends BlockData {
  title: string;
  description: string;
  children?: ReactNode | ReactNode[];
  isBgLight?: boolean;
}

export default function Block({
  title,
  description,
  children,
  isBgLight = false,
}: BlockComponentData) {
  return (
    <BlockBox className={isBgLight ? "bg-light" : ""}>
      <BlockTitle title={title} />
      <BlockDescription description={description} />
      {children}
    </BlockBox>
  );
}

{
  /* <BlockBox className="bg-light">
<BlockTitle title="titulo" />
<BlockDescription description="descripcion" />
<Button text="boton" isExpandable />
Barra de progreso
</BlockBox> */
}
