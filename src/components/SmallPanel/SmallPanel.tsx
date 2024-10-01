import React from "react";
import classNames from "classnames";
import {PanelBgColor, PanelMedia} from "../../utils/utils";

export type SmallPanelTypes = "vertical" | "horizontal";

export type PanelListItems = {
  src: string;
  text?: string;
  className?: string;
  download?: string;
  title?: string;
};

export type PanelList = {
  title?: string;
  items: PanelListItems[];
};

interface SmallPanelProps {
  title?: string;
  description?: string | JSX.Element;
  bgColor?: PanelBgColor;
  picture?: PanelMedia;
  type?: SmallPanelTypes;
  list?: PanelList;
}

const getImage = (picture?: PanelMedia): JSX.Element | null => {
  if (picture && picture.src !== undefined) {
    return (
      <img
        src={picture.src}
        alt={picture.alt || ""}
        className={picture.className || "rounded-lg"}
        {...(picture.size && {width: picture.size, height: picture.size})}
      />
    );
  }
  return null;
};

export default function SmallPanel(
  props: React.PropsWithChildren<SmallPanelProps>,
) {
  const {
    title,
    description,
    picture,
    bgColor,
    children,
    type = "vertical",
    list,
  } = props;

  const smallPanelClasses = classNames(
    "card",
    "card-simple",
    {
      "panel-list-link": list,
      "panel-sm": !list && type === "vertical",
      "panel-sm-horizontal": !list && type === "horizontal",
    },
    {[`bg-${bgColor}`]: bgColor !== undefined},
  );

  return (
    <div className={smallPanelClasses.trim()}>
      {picture && getImage(picture as PanelMedia)}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
      {children && <div className="panel-footer">{children}</div>}
      {list && (
        <div className="list-link">
          <h3 className="list-link-title">{list.title}</h3>
          {list.items.map((item, index) => (
            <React.Fragment key={index}>
              {item.title && (
                <h4 className="list-link-item-title">{item.title}</h4>
              )}
              <a
                className={item.className}
                href={item.src}
                download={item.download}
                target="_blank"
                rel="noreferrer"
              >
                {item.text}
              </a>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
