import React from "react";
import {render} from "@testing-library/react";

import Spinner from "./Spinner";

describe("Spinner", () => {
  test("renders the Spinner component", () => {
    render(
      <>
        <Spinner type="primary"></Spinner>
        <Spinner type="secondary"></Spinner>
        <Spinner type="success"></Spinner>
        <Spinner type="danger"></Spinner>
        <Spinner type="info"></Spinner>
        <Spinner type="light"></Spinner>
        <Spinner type="dark"></Spinner>
        <Spinner size="lg"></Spinner>
        <Spinner size="sm"></Spinner>
        <Spinner isBlock></Spinner>
      </>,
    );
  });
});
