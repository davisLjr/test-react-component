import React from "react";
import classNames from "classnames";

export type GalleryImages = {
  id?: number;
  url: string;
  alt?: string;
  author?: string;
  title?: string;
  description?: string;
};

export type GalleryProps = {
  interactive?: boolean;
  images?: GalleryImages[];
};

export default function Gallery ({ interactive = true, images = [] }: GalleryProps) {
  const modalClass = classNames("modal", "modal-carousel");

  const totalImages = images.length;

  return (
    <>
      <div
        className={`gallery-grid gallery-max-${totalImages && totalImages <= 7 ? totalImages : 7}`}
      >
        {images.slice(0, 7).map(({ url, alt }, index) =>
          interactive ? (
            <a
              key={index}
              href={url}
              className="gallery-grid-item"
              data-toggle="modal"
              data-target="#modalGallery"
            >
              <img src={url} alt={alt} />
            </a>
          ) : (
            <div key={index} className="gallery-grid-item">
              <img src={url} alt={alt} />
            </div>
          ),
        )}
      </div>
      {interactive && (
        <div
          className={modalClass}
          data-backdrop="static"
          tabIndex={-1}
          role="dialog"
          id="modalGallery"
        >
          <div className="pt-5 modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <a href="#" className="modal-carousel-close" data-dismiss="modal">
                Cerrar ventana
              </a>
              <div
                id="modalGalleryControls"
                className="carousel"
                data-ride="carousel"
                data-interval="false"
              >
                <div className="carousel-inner">
                  {images.slice(0, 7).map(({ url, alt, author, title, description }, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img src={url} className="d-block w-100" alt={alt} />
                      <div className="carousel-caption">
                        <div className="row mb-4">
                          <div className="col">
                            <span className="text-xs">{author}</span>
                          </div>
                          <div className="col text-right">
                            <span className="text-xs">
                              Imagen {index + 1}/{totalImages <= 7 ? totalImages : 7}
                            </span>
                          </div>
                        </div>
                        <h5 className="h2">{title}</h5>
                        {description && (
                          <p>
                            {description.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {index === 0 ? `${line} ` : line}
                                {index === 0 && <br />}
                              </React.Fragment>
                            ))}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-target="#modalGalleryControls"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-target="#modalGalleryControls"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
