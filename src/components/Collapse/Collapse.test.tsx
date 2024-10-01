import React from "react";
import {render} from "@testing-library/react";

import Collapse from "./Collapse";
const COLLAPSE_CONTENT = [
  {
    title: "Titulo1",
    id: "colapsable1",
    content: (
      <>
        Hola, contenido de collapse 1 <strong>strong</strong>
      </>
    ),
  },
  {
    title: "Titulo2",
    isTitleH4: true,
    label: "volanta2",
    subtitle: "subtitulo2",
    id: "colapsable2",
    content: (
      <>
        Hola, contenido de collapse 2 <strong>strong 2</strong>
      </>
    ),
  },
  {
    title: "Titulo3",
    isTitleH4: true,
    icon: "bx bxs-info-circle",
    label: "volanta3",
    subtitle: "subtitulo3",
    id: "colapsable3",
    content: (
      <>
        Hola, contenido de collapse 3 <strong>strong 3</strong>
      </>
    ),
  },
];

const COLLAPSE_ITEMS = [
  {
    title: "Titulo A",
    isTitleH4: true,
    icon: "info",
    label: "volanta",
    subtitle: "subtitulo",
    id: "colapsable4",
    content: (
      <>
        Hola, contenido de collapse 4 <strong>strong 4</strong>{" "}
        <a href="#">enlace</a>
      </>
    ),
  },
  {
    title: "$450,00",
    isTitleH4: true,
    label: "Total a pagar",
    id: "colapsable5",
    contentItems: [
      {title: "titulo 1", subtitle: "boleta n14546778369", label: "$200"},
      {title: "titulo 1", subtitle: "boleta n14546778369", label: "$200"},
      {title: "titulo 1", subtitle: "boleta n14546778369", label: "$200"},
    ],
  },
  {
    title: "Titulo C",
    isTitleH4: true,
    icon: "info",
    label: "volanta",
    subtitle: "subtitulo",
    id: "colapsable6",
    contentInputs: [
      {
        title: "visa",
        subtitle: "heraldo",
        icon: "info",
        id: "visa",
        name: "credit_card",
      },
      {
        title: "master",
        subtitle: "julierta",
        icon: "bx bxl-mastercard",
        id: "master",
        name: "credit_card",
      },
    ],
  },
];

describe("Collapse", () => {
  test("renders the Collapse component", () => {
    render(
      <>
        <Collapse
          idCollapse="collapsableUnique"
          itemsCollapse={COLLAPSE_CONTENT}
          isWhite
        ></Collapse>
        <Collapse itemsCollapse={COLLAPSE_ITEMS}></Collapse>
      </>,
    );
  });
});
