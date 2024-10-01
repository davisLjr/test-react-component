import React from "react";

export interface HighlightedVideoData
  extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  className?: string;
  isIframe?: boolean;
  sourceSrc?: string;
  sourceType?: string;
  trackSrc?: string;
  trackDefault?: boolean;
  trackKind?: string;
  trackSrcLang?: string;
  ariaLabel?: string;
  urlVideo?: string;
}

export default function HighlightedVideo({
  className,
  sourceSrc,
  sourceType,
  trackSrc,
  trackDefault,
  trackKind,
  trackSrcLang,
  ariaLabel,
  urlVideo,
  isIframe,
  ...iframeProps
}: HighlightedVideoData) {
  return (
    <>
      {isIframe ? (
        <iframe
          className={`card-img${className ? ` ${className}` : ""}`}
          {...iframeProps}
        ></iframe>
      ) : (
        <video
          className={`card-img${className ? ` ${className}` : ""}`}
          controls={true}
        >
          <source src={sourceSrc} type={sourceType} />
          <track
            src={trackSrc}
            default={trackDefault}
            kind={trackKind}
            srcLang={trackSrcLang}
          />
          <p>
            {ariaLabel}
            <a href={urlVideo}>este enlace</a>
          </p>
        </video>
      )}
    </>
  );
}
