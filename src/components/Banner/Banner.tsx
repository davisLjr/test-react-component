import React from "react";

interface BannerData {
  children?: React.ReactNode;
  buttons?: React.ReactNode;
  iconBanner?: string;
  description: React.ReactNode;
  isDark?: boolean;
}

export default function Banner({
  buttons,
  children,
  iconBanner,
  description,
  isDark,
}: BannerData) {
  const bannerClass = isDark ? "banner banner-dark" : "banner";

  return (
    <div className={bannerClass}>
      <div className="banner-content">
        {iconBanner && !iconBanner?.includes("bx") && (
          <span className="material-symbols-rounded o-icon">{iconBanner}</span>
        )}
        {iconBanner && iconBanner?.includes("bx") && (
          <i className={iconBanner}></i>
        )}
        {children}
        <p className="banner-text">{description}</p>
        {buttons && <div className="banner-actions">{buttons}</div>}
      </div>
    </div>
  );
}
