import React from "react";
import {render} from "@testing-library/react";

import SmallPanel from "./SmallPanel";
import Button from "../Button";

export const TITLE = "Nombre del titular";
export const DESCRIPTION =
  "Descripción de hasta 3 líneas para mantener los estándares de lectura en los componentes de Obelisco.";
export const PICTURE_SMALL = {
  src: "destacado/destacado.jpeg",
  alt: "descripción de imagen",
  size: 154,
};
export const PICTURE_XS_SMALL = {
  src: "destacado/destacado.jpeg",
  alt: "descripción de imagen",
  size: 104,
};
export const LIST_PANEL = {
  title: "Título de una lista de enlaces",
  items: [
    {
      src: "#",
      text: "Enlace predeterminado",
    },
    {
      src: "#",
      text: "Enlace predeterminado",
    },
    {
      src: "#",
      text: "Enlace predeterminado",
    },
  ],
};
export const LIST_PANEL_DOWNLOAD = {
  title: "Título de una lista de enlaces",
  items: [
    {
      src: "#",
      text: "Enlace de descarga",
      className: "download",
      download: "",
    },
    {
      src: "#",
      text: "Enlace de descarga",
      className: "download",
      download: "",
    },
    {
      src: "#",
      text: "Enlace de descarga",
      className: "download",
      download: "",
    },
  ],
};
export const LIST_PANEL_DOWNLOAD_BUTTON = {
  title: "Título de una lista de enlaces",
  items: [
    {
      src: "#",
      text: "Descargar",
      className: "btn btn-secondary btn-sm download-link card-link",
      download: "",
      title: "Nombre del archivo",
    },
    {
      src: "#",
      text: "Descargar",
      className: "btn btn-secondary btn-sm download-link card-link",
      download: "",
      title: "Nombre del archivo",
    },
    {
      src: "#",
      text: "Descargar",
      className: "btn btn-secondary btn-sm download-link card-link",
      download: "",
      title: "Nombre del archivo",
    },
  ],
};

describe("SmallPanel", () => {
  test("renders the SmallPanel component", () => {
    render(
      <>
        <div style={{maxWidth: "526px"}}>
          <SmallPanel
            title={TITLE}
            description={DESCRIPTION}
            picture={PICTURE_SMALL}
            type="horizontal"
          />
          <SmallPanel
            title={TITLE}
            description={DESCRIPTION}
            picture={PICTURE_XS_SMALL}
            type="horizontal"
          />
        </div>
        <div style={{maxWidth: "340px"}}>
          <SmallPanel
            title={TITLE}
            description={DESCRIPTION}
            picture={PICTURE_SMALL}
          >
            <Button size="sm" type="secondary" text="Acción 1" />
            <Button size="sm" type="link" text="Acción 2" />
          </SmallPanel>
          <SmallPanel
            title={TITLE}
            description={DESCRIPTION}
            picture={PICTURE_SMALL}
            bgColor="light"
          >
            <Button size="sm" type="secondary" text="Acción 1" />
            <Button size="sm" type="link" text="Acción 2" />
          </SmallPanel>
          <SmallPanel
            title={TITLE}
            description={DESCRIPTION}
            picture={PICTURE_SMALL}
            bgColor="white"
          >
            <Button size="sm" type="secondary" text="Acción 1" />
            <Button size="sm" type="link" text="Acción 2" />
          </SmallPanel>
          <SmallPanel
            title={TITLE}
            description={DESCRIPTION}
            picture={PICTURE_SMALL}
          >
            <a className="download" href="#" target="_blank" rel="noreferrer">
              Descargar
            </a>
          </SmallPanel>
          <SmallPanel
            title={TITLE}
            description={DESCRIPTION}
            picture={PICTURE_SMALL}
            list={LIST_PANEL}
          />
          <SmallPanel
            title={TITLE}
            description={DESCRIPTION}
            picture={PICTURE_SMALL}
            list={LIST_PANEL_DOWNLOAD}
          />
          <SmallPanel
            title={TITLE}
            description={DESCRIPTION}
            picture={PICTURE_SMALL}
            list={LIST_PANEL_DOWNLOAD_BUTTON}
          />
        </div>
      </>,
    );
  });
});
