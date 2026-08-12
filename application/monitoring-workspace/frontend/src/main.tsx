import "maplibre-gl/dist/maplibre-gl.css";
import { setWorkerUrl } from "maplibre-gl";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import "./app/i18n.js";
import { createRoot } from "react-dom/client";
import { App } from "./app/app.js";
import "./presentation/styles.css";

setWorkerUrl(workerUrl);

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<App />);
}
