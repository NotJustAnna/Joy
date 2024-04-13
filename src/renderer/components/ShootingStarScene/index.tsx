import { useRef } from "react";
import Canvas from "./Canvas";
import { ShootingStarsScene } from "./gfx/ShootingStarsScene";
import "./index.css";

export interface ShootingStarSceneProps {
  paused: boolean;
}

export default function ShootingStarScene({ paused }: ShootingStarSceneProps) {
  const sceneRef = useRef<ShootingStarsScene>();

  if (typeof window !== 'undefined') {
    if (!sceneRef.current) {
      const scene = new ShootingStarsScene();
      sceneRef.current = scene;
    }
    sceneRef.current!.paused = paused;
  }

  return <Canvas draw={(ctx) => sceneRef.current!.loop(ctx)} className="canvasFullscreen" />;
}