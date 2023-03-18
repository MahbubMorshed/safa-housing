import React from "react";
import "./style.css";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
function Container() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 10, 50],
          // rotation: [45, 0, 0],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}

export default Container;
