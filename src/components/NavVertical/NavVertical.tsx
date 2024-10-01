import React, {useState, useEffect} from "react";

interface NavItem {
  text: string;
  path: string;
  active?: boolean;
  iconLeft?: string;
  isDisabled?: boolean;
  children?: NavItem[];
}

interface NavigationProps {
  items: NavItem[];
}

const NavigationVertical: React.FC<NavigationProps> = ({items}) => {
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

  const isPathActive = (path: string, navItems: NavItem[]): boolean => {
    return navItems.some(
      (item) =>
        item.path === path ||
        (item.children && isPathActive(path, item.children)),
    );
  };

  const renderNavItems = (navItems: NavItem[] = []) => {
    return navItems.map((item, index) => {
      const isActive =
        item.path === activePath &&
        !isPathActive(activePath, item.children || []);

      return (
        <li key={index} className="nav-item">
          <a
            className={`nav-link ${isActive ? "active" : ""}${
              item.children && isPathActive(activePath, item.children)
                ? "active-child"
                : ""
            }${item.isDisabled ? "disabled" : ""}`.trim()}
            href={item.path}
            {...(item.isDisabled ? {"aria-disabled": true, tabIndex: -1} : {})}
          >
            <div className="nav-icon">
              {item.iconLeft && getIcon(item.iconLeft)}
              <span>{item.text}</span>
            </div>
          </a>

          {item.children && (
            <ul className="nav flex-column nav-pills">
              {renderNavItems(item.children)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <nav>
      <ul className="nav flex-column nav-pills nav-lg">
        {renderNavItems(items)}
      </ul>
    </nav>
  );
};

export default NavigationVertical;

function getIcon(icon: string) {
  if (icon?.includes("bx")) {
    return <i className={icon}></i>;
  } else {
    return <span className="material-icons-round">{icon}</span>;
  }
}
