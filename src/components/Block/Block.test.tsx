import React from "react";
import {render} from "@testing-library/react";

import Button from "../Button";
import Block from "./Block";

describe("Block", () => {
  test("renders the Block component", () => {
    render(
      <>
        <Block title="Iniciá el trámite y completá todos los pasos">
          <Button isExpandable text="Iniciar trámite" size="lg" url="#" />
        </Block>
        <Block title="Iniciá el trámite y completá todos los pasos" isLight>
          <Button isExpandable text="Iniciar trámite" size="lg" url="#" />
        </Block>
        <Block
          title="Iniciá el trámite y completá todos los pasos"
          description="Si tenés un trámite iniciado podés continuarlo desde acá."
        >
          <Button isExpandable text="Iniciar trámite" size="lg" />
        </Block>
        <Block
          title="Iniciá el trámite y completá todos los pasos"
          description="Si tenés un trámite iniciado podés continuarlo desde acá."
          isLight
        >
          <Button isExpandable text="Iniciar trámite" size="lg" />
        </Block>
        <Block
          title="Este es tu progreso en el trámite"
          blockProgressBar={{type: "bg-success", progress: 25}}
        >
          <Button isExpandable text="Continuar trámite" size="lg" url="#" />
        </Block>
        <Block
          title="Este es tu progreso en el trámite"
          blockProgressBar={{type: "bg-success", progress: 25}}
          isLight
        >
          <Button isExpandable text="Continuar trámite" size="lg" url="#" />
        </Block>
      </>,
    );
  });
});
