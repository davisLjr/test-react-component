import React, {useState, useEffect} from "react";
import {SizeComponents} from "../../utils/utils";

interface NavItemHorizontal {
  text: string;
  path: string;
  iconLeft?: string;
  disabled?: boolean;
  size?: SizeComponents;
  bordered?: boolean;
}

interface NavigationProps {
  items: NavItemHorizontal[];
}

const NavigationHorizontal: React.FC<NavigationProps> = ({items}) => {
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePath(window.location.pathname);
    };

    handleRouteChange();

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <nav>
      <ul className="nav flex-row nav-pills">
        {renderNavItemsHorizontal(items, activePath)}
      </ul>
    </nav>
  );
};

export default NavigationHorizontal;

function renderNavItemsHorizontal(
  items: NavItemHorizontal[],
  activePath: string,
) {
  return items.map((item, index) => (
    <li className="nav-item" key={index}>
      <a
        className={`nav-link ${item.path === activePath ? "active" : ""} ${
          item.disabled ? " disabled" : ""
        }`}
        href={item.path}
        aria-disabled={item.disabled}
        tabIndex={item.disabled ? -1 : undefined}
      >
        <div className="nav-icon">
          {item.iconLeft && getIcon(item.iconLeft)}
          <span>{item.text}</span>
        </div>
      </a>
    </li>
  ));
}

function getIcon(icon: string) {
  if (icon?.includes("bx")) {
    return <i className={icon}></i>;
  } else {
    return <span className="material-icons-round">{icon}</span>;
  }
}
