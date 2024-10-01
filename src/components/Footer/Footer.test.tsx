import React from "react";
import {render} from "@testing-library/react";

import Footer from "./Footer";
const PHONE_ITEMS_CUSTOM = [
  {
    title: "Número Personalizado",
    number: 101,
  },
  {
    title: "Número Personalizado",
    number: 102,
  },
  {
    title: "Número Personalizado",
    number: 103,
  },
];

const NETWORK_ITEMS_CUSTOM = [
  {
    title: "Red personalizada",
    src: "https://www.google.com/",
    icon: "bx bxs-info-circle",
  },
  {
    title: "Red personalizada",
    src: "https://www.instagram.com/",
    icon: "bx bxs-info-circle",
  },
  {
    title: "Red personalizada",
    src: "https://youtube.com/",
    icon: "bx bxs-info-circle",
  },
];

const LEGAL_ITEMS_CUSTOM = [
  {
    title: "Título Personalizado",
    src: "https://buenosaires.gob.ar/inicio/",
  },
  {
    title: "Título Personalizado",
    src: "https://buenosaires.gob.ar/inicio/",
  },
  {
    title: "Título Personalizado",
    src: "https://buenosaires.gob.ar/inicio/",
  },
];

describe("Footer", () => {
  test("renders the Footer component", () => {
    render(
      <>
        <Footer />
        <Footer isPhoneSectionHidden isNetworkSectionHidden />
        <Footer hasIndicator />
        <Footer
          phoneItems={PHONE_ITEMS_CUSTOM}
          networkItems={NETWORK_ITEMS_CUSTOM}
          legalItems={LEGAL_ITEMS_CUSTOM}
        />
      </>,
    );
  });
});
