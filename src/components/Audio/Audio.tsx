import React from "react";

interface AudioData {
  title?: string;
  description?: string | null;
  children: React.ReactNode;
  className?: string;
}

export default function Audio ({ children, title, description, className }: AudioData) {
  return (
    <div className={`card ${className ? className : ""}`}>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        {children}
      </div>
    </div>
  );
}
