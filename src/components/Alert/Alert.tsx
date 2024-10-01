import React from "react";

export interface AlertData {
  children: React.ReactNode;
  isDimissible?: boolean;
  alertInfo?: boolean;
  alertWarning?: boolean;
  alertSuccess?: boolean;
  alertDanger?: boolean;
  className?: string;
}

export default function Alert ({
  children,
  isDimissible,
  alertInfo,
  alertWarning,
  alertSuccess,
  alertDanger,
  className,
}: AlertData) {
  if (!alertInfo && !alertWarning && !alertSuccess && !alertDanger) {
    alertInfo = true;
  }

  const classes = `alert 
    ${alertInfo ? "alert-info" : ""} 
    ${alertWarning ? "alert-warning" : ""} 
    ${alertSuccess ? "alert-success" : ""} 
    ${alertDanger ? "alert-danger" : ""}`;

  return (
    <div
      className={`${classes} ${isDimissible ? "alert-dismissible show fade" : ""} ${className ? className : ""}`}
      role="alert"
    >
      {children}
      {isDimissible && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Cerrar"
        ></button>
      )}
    </div>
  );
}
