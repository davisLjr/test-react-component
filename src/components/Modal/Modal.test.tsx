import React from "react";
import {render} from "@testing-library/react";

import Button from "../Button";
import Modal from "./Modal";

describe("Modal", () => {
  test("renders the Modal component", () => {
    render(
      <>
        <Modal
          buttonTitle="Modal de confirmación"
          id="exampleModal1"
          title="¡Importante!"
          description="Antes de realizar la ficha de salud, tené en cuenta haber realizado los pasos previos correspondientes."
        >
          <Button
            text="Volver atrás"
            type="link"
            isOutline
            dataDismiss="modal"
          ></Button>
          <Button text="Continuar"></Button>
        </Modal>
      </>,
    );
  });
});
