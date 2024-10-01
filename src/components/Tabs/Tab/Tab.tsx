/* eslint-disable no-unused-vars */
import React from "react";

export type TabProps = {
  id: string;
  label: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  isActive: boolean;
  isDisabled: boolean;
  onClick: (id: string) => void;
  sizeLg?: boolean;
  sizeSm?: boolean;
};

export default function Tab ({ id, label, iconRight, iconLeft, isActive, isDisabled, onClick, sizeLg, sizeSm }: TabProps) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${isActive ? "active" : ""}${isDisabled ? "disabled" : ""}${sizeLg ? " nav-link-lg" : ""}${sizeSm ? " nav-link-sm" : ""}`}
        type="button"
        role="tab"
        aria-selected={isActive}
        id={id}
        onClick={() => onClick(id)}
        disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        <div className="nav-icon">
          {iconLeft && <>{iconLeft}</>}
          {label}
          {iconRight && <>{iconRight}</>}
        </div>
      </button>
    </li>
  );
}
