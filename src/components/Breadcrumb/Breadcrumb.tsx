import * as React from "react";

export interface BreadcrumbItemType {
  name: string;
  link: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItemType[];
}

export default function Breadcrumb(
  props: React.PropsWithChildren<BreadcrumbProps>,
) {
  const {items} = props;

  return (
    <nav aria-label="Navegación secundaria">
      <ol className="breadcrumb">
        {[items[0], ...items.slice(-3)].map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
