import React from "react";
import "./ListLink.scss";

interface List {
  items: string[];
  title: string;
}

interface ListInformativeProps extends List {
  typeList?: "check" | "bullet";
}

interface ListLinkProps extends List {
  linkItems: string[];
}

export const ListInformative: React.FC<ListInformativeProps> = ({
  items,
  typeList,
  title,
}) => {
  const listClassName = typeList ? `list-informative-${typeList}` : "";

  return (
    <>
      <div className="list-informative">
        <h3 className="list-informative-subtitle">{title}</h3>

        <ul className={listClassName}>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const ListLink: React.FC<ListLinkProps> = ({
  items,
  title,
  linkItems,
}) => {
  return (
    <>
      <div className="list-link">
        <h3 className="list-link-title">{title}</h3>

        {items.map((item, i) => (
          <a href={linkItems[i]} target="_blank" rel="noreferrer" key={i}>
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default {ListLink, ListInformative};
