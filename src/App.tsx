import { SoftShadows, Sparkles } from "@react-three/drei";
import {
  BrightnessContrast,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { MultiplyBlending } from "three";
import { Camera } from "./3d/Camera";
import { Floor } from "./3d/Floor";
import { Lights } from "./3d/Lights";

import { Canvas } from "@react-three/fiber";

function WoodenFloor3D() {
  return (
    <>
      <Camera />
      <Floor />

      <Lights />

      <SoftShadows size={300} />
      {/* <Crane /> */}
      <Sparkles
        count={25}
        scale={4}
        size={0.5}
        material-blending={MultiplyBlending}
        noise={10}
        speed={0.5}
      />

      <EffectComposer>
        <BrightnessContrast contrast={0.45} />
        <Vignette eskil={false} offset={0.001} darkness={0.85} />
      </EffectComposer>
    </>
  );
}

export default function App() {
  return (
    <>
      <Canvas
        shadows
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <WoodenFloor3D />
      </Canvas>
    </>
  );
}
