import React, {ReactNode} from "react";

interface DropdownProps {
  buttonText?: string;
  icon?: string;
  children: ReactNode;
  isExpandable?: boolean;
  menuRight?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  buttonText,
  icon,
  children,
  isExpandable = true,
  menuRight = false,
}) => {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {icon && getIcon(icon)}
        {buttonText && <span className="btn-dropdown-text">{buttonText}</span>}
        {isExpandable && (
          <span className="material-icons-round btn-dropdown-icon">
            {isExpandable ? "expand_less" : "expand_more"}
          </span>
        )}
      </button>
      <div
        className={`dropdown-menu${menuRight ? " dropdown-menu-right" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;

function getIcon(icon: string) {
  if (icon?.includes("bx")) {
    return <i className={icon}></i>;
  } else {
    return <span className="material-icons-round">{icon}</span>;
  }
}
