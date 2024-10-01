import React from "react";

export type TabPanelProps = {
  id: string;
  isActive: boolean;
  children: React.ReactNode;
};

export default function TabPanel({id, isActive, children}: TabPanelProps) {
  return (
    <div
      className={`tab-pane fade ${isActive ? "show active" : ""}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
    >
      {children}
    </div>
  );
}
