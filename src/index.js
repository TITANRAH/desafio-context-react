import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ImagenesProvider } from "./context/ImagenesProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ImagenesProvider>
      <App />
    </ImagenesProvider>
  </StrictMode>
);
