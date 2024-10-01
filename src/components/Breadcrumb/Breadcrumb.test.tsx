import React from "react";
import {render} from "@testing-library/react";

import Breadcrumb from "./Breadcrumb";

const ITEMS = [
  {name: "Buenos Aires", link: "#"},
  {name: "Página intermedia con mucho mucho texto", link: "#"},
  {name: "Intermedia", link: "#"},
  {name: "Página anterior", link: "#"},
];

describe("Breadcrumb", () => {
  test("renders the Breadcrumb component", () => {
    render(
      <>
        <Breadcrumb items={ITEMS} />
      </>,
    );
  });
});
