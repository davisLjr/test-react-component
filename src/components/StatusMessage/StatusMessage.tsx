import React from "react";

interface StatusListComponentData {
  StatusList: {titleList: string}[];
}

export function StatusListComponent({StatusList}: StatusListComponentData) {
  return (
    <ul className="status-list">
      {StatusList.map((item, index) => (
        <li key={index} dangerouslySetInnerHTML={{__html: item.titleList}} />
      ))}
    </ul>
  );
}

interface StatusMessageData {
  title: string;
  description: string;
  StatusList: {titleList: string}[];
  isWarning?: boolean;
  isDanger?: boolean;
  isInfo?: boolean;
  isSuccess?: boolean;
  isInstitutional?: boolean;
  children: React.ReactNode;
}

export default function StatusMessage({
  title,
  description,
  StatusList,
  isWarning,
  isDanger,
  isInfo,
  isSuccess,
  isInstitutional,
  children,
}: StatusMessageData) {
  const classNames = `status ${isWarning ? "status-primary" : ""} ${
    isDanger ? "status-danger" : ""
  } ${isInfo ? "status-info" : ""}
  ${isSuccess ? "status-success" : ""}
  ${isInstitutional ? "status-institutional" : ""}`;

  return (
    <div className={classNames}>
      <h2 className="status-title">{title}</h2>
      <p className="status-text">{description}</p>
      <StatusListComponent StatusList={StatusList} />
      {children}
    </div>
  );
}
