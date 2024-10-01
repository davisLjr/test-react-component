import React from "react";
import {render} from "@testing-library/react";

import Banner from "./Banner";

describe("Banner", () => {
  test("renders the Banner component", () => {
    render(
      <>
        <Banner
          iconBanner="bx bx-info-circle"
          description="Este es un banner informativo con un ícono de información."
        >
          {/* Contenido adicional, como botones o enlaces */}
          <button type="button" className="btn btn-primary">
            Primario
          </button>
          <button type="button" className="btn btn-secondary">
            Secundario
          </button>
        </Banner>
      </>,
    );
  });
});
