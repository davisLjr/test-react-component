import React from "react";
import {render} from "@testing-library/react";

import Access from "./Access";

describe("Button", () => {
  test("renders the Button component", () => {
    render(
      <>
        <Access
          title="Documentación"
          description="Encuentra documentación importante"
          icon={<i className="fas fa-file-alt"></i>}
          size="small"
          url="/documentacion"
        />
      </>,
    );
  });
});
