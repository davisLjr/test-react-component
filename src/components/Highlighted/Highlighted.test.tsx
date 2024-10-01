// import React from "react";
// import {render} from "@testing-library/react";

// import HighlightedPanel from "./HighlightedPanel";
// import Button from "../Button";

// export const TITLE_HIGHLIGHTED = "Título del destacado";
// export const DESCRIPTION_HIGHLIGHTED =
//   "Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces";
// export const DESCRIPTION_HIGHLIGHTED_LATERAL =
//   "Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces.";

// export const PICTURE_HIGHLIGHTED = {
//   src: "destacado/destacado.jpeg",
//   alt: "descripción de imagen",
// };
// export const VIDEO = {
//   src: "destacado/larreta.mp4",
//   alt: "descripción alternativa",
// };
// export const IFRAME = {
//   src: "https://www.youtube.com/embed/_XZ9p7rbjWw",
//   title: "¡Vuelve Buenos Aires Jazz!",
// };

// describe("HighlightedPanel", () => {
//   test("renders the HighlightedPanel component", () => {
//     render(
//       <>
//         <HighlightedPanel
//           title={TITLE_HIGHLIGHTED}
//           description={DESCRIPTION_HIGHLIGHTED}
//           picture={PICTURE_HIGHLIGHTED}
//         >
//           <Button size="lg">Botón</Button>
//           <Button type="secondary" size="lg">
//             Botón
//           </Button>
//         </HighlightedPanel>
//         <div className="card-deck card-column max-cards-2 my-5">
//           <HighlightedPanel
//             title={TITLE_HIGHLIGHTED}
//             description={DESCRIPTION_HIGHLIGHTED}
//             video={VIDEO}
//             type="grouping"
//           >
//             <Button size="lg">Botón</Button>
//           </HighlightedPanel>
//           <HighlightedPanel
//             title={TITLE_HIGHLIGHTED}
//             description={DESCRIPTION_HIGHLIGHTED}
//             iframe={IFRAME}
//             type="grouping"
//           >
//             <Button type="primary" size="lg">
//               Botón
//             </Button>
//           </HighlightedPanel>
//         </div>
//         <div style={{maxWidth: "340px"}}>
//           <HighlightedPanel
//             title={TITLE_HIGHLIGHTED}
//             description={DESCRIPTION_HIGHLIGHTED_LATERAL}
//             type="lateral"
//           >
//             <Button size="lg" isExpandable>
//               Iniciar trámite
//             </Button>
//           </HighlightedPanel>
//         </div>
//       </>,
//     );
//   });
// });
