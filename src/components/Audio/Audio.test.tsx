import React from "react";
import {render} from "@testing-library/react";

import Audio from "./Audio";

describe("Audio", () => {
  test("renders the Audio component", () => {
    render(
      <>
        <Audio
          title="Canción de ejemplo"
          description="Esta es una canción de muestra."
        >
          <audio controls>
            <source src="sample-audio.mp3" type="audio/mpeg" />
            Tu navegador no soporta la reproducción de audio.
          </audio>
        </Audio>
      </>,
    );
  });
});
