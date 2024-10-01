import React from "react";
import {render} from "@testing-library/react";

import StatusMessage from "./StatusMessage";

describe("StatusMessage", () => {
  test("renders the StatusMessage component", () => {
    render(
      <>
        <StatusMessage
          title="Título del mensaje"
          description="Descripción del mensaje"
          StatusList={[
            {titleList: "Elemento 1 <a href='https://google.com'>web</a>"},
            {titleList: "Elemento 2 <a href='https://Image.com'>web</a>"},
          ]}
          isInstitutional
        >
          Contenido adicional opcional
        </StatusMessage>
      </>,
    );
  });
});
