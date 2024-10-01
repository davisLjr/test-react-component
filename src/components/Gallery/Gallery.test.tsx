import React from "react";
import {render} from "@testing-library/react";

import Gallery from "./Gallery";

const IMAGES = [
  {
    url: "https://gcba.github.io/Obelisco/gallery/1.jpg",
    alt: "descripcion de imagen 1",
    author: "Autor 1",
    title: "Titulo 1",
    description: "Esta es la descripcion 1",
    id: 1,
  },
  {
    url: "https://gcba.github.io/Obelisco/gallery/2.jpg",
    alt: "descripcion de imagen 2",
    author: "Autor 2",
    title: "Titulo 2",
    description: "Esta es la descripcion 2",
    id: 2,
  },
  {
    url: "https://gcba.github.io/Obelisco/gallery/3.jpg",
    alt: "descripcion de imagen 3",
    author: "Autor 3",
    title: "Titulo 3",
    description: "Esta es la descripcion 3",
    id: 3,
  },
  {
    url: "https://gcba.github.io/Obelisco/gallery/4.jpg",
    alt: "descripcion de imagen 4",
    author: "Autor 4",
    title: "Titulo 4",
    description: "Esta es la descripcion 4",
    id: 4,
  },
  {
    url: "https://gcba.github.io/Obelisco/gallery/5.jpg",
    alt: "descripcion de imagen 5",
    author: "Autor 5",
    title: "Titulo 5",
    description: "Esta es la descripcion 5",
    id: 5,
  },
  {
    url: "https://gcba.github.io/Obelisco/gallery/4.jpg",
    alt: "descripcion de imagen 6",
    author: "Autor 6",
    title: "Titulo 6",
    description: "Esta es la descripcion 6",
    id: 6,
  },
  {
    url: "https://gcba.github.io/Obelisco/gallery/5.jpg",
    alt: "descripcion de imagen 7",
    author: "Autor 7",
    title: "Titulo 7",
    description: "Esta es la descripcion 7",
    id: 7,
  },
  {
    url: "https://gcba.github.io/Obelisco/gallery/1.jpg",
    alt: "descripcion de imagen 8",
    author: "Autor 8",
    title: "Titulo 8",
    description: "Esta es la descripcion 8",
    id: 8,
  },
  {
    url: "https://gcba.github.io/Obelisco/gallery/2.jpg",
    alt: "descripcion de imagen 9",
    author: "Autor 9",
    title: "Titulo 9",
    description: "Esta es la descripcion 9",
    id: 9,
  },
];

describe("Gallery", () => {
  test("renders the Gallery component", () => {
    render(
      <>
        <Gallery images={IMAGES} />
        <Gallery images={IMAGES} interactive={false}></Gallery>
      </>,
    );
  });
});
