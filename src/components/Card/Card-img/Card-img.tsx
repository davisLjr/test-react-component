import React from "react";

export interface CardImgData extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  imgHorizontal?: boolean;
  panelImage?: boolean;
}

export default function CardImg ({ className, imgHorizontal = false, panelImage = false, ...props }: CardImgData) {
  return (
    <>
      {panelImage ? (
        <img className={`card-img${className ? ` ${className}` : ""}`} {...props} />
      ) : (
        <img className={`${imgHorizontal ? "card-img-left" : "card-img-top"}${className ? ` ${className}` : ""}`} {...props} />
      )}
    </>
  );
}
