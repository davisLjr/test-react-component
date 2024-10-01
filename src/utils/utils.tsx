import React from "react";
export type Sizes = "default" | "small" | "large";

export const sizeToClass = (size: Sizes | "default"): string => {
  switch (size) {
    case "default":
      return "";
    case "large":
      return "lg";
    case "small":
      return "sm";
  }
};

export type SizeComponents = "xs" | "sm" | "md" | "lg";

export type PanelBgColor = "light" | "white";

export type PanelMedia = {
  src: string;
  alt?: string;
  className?: string;
  size?: number;
};

export function getIcon(icon: string) {
  if (icon?.includes("bx")) {
    return <i className={icon}></i>;
  } else {
    return <span className="material-icons-round">{icon}</span>;
  }
}
