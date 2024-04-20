import { createRoot } from "react-dom/client";
import LandingPage from "./LandingPage";
import { Canvas } from "@react-three/fiber";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Canvas
  camera={{ position: [2, 0, 5] }}
  >
    <LandingPage />
  </Canvas>
);
