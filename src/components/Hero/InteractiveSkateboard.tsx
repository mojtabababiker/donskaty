"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, ThreeEvent, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Html } from "@react-three/drei";
import GSAP from "gsap";
import { Skateboard } from "../3DModels/Skateboard";
import { Hotspot } from "./Hotspots";
import { useGSAP } from "@gsap/react";
import { WavyPaths } from "./WavyPaths";

const CAMERA_POSITION = [1.5, 1, 1.4] as const;

type SkateboardProps = {
  deckTextureUrls: string[];
  deckTextureUrl: string;
  wheelsTextureUrls: string[];
  wheelsTextureUrl: string;
  truckColor: string;
  boltsColor: string;
};

export function InteractiveSkateboard({ ...props }: SkateboardProps) {
  return (
    <Canvas camera={{ position: CAMERA_POSITION, fov: 55 }}>
      {/* <OrbitControls zoomSpeed={0.4} rotateSpeed={0.3} /> */}
      <Environment
        files={"/hdr/warehouse-256.hdr"}
        environmentIntensity={0.5}
      />
      <Suspense fallback={null}>
        <Scene {...props} />
      </Suspense>
    </Canvas>
  );
}

function Scene({ ...props }: SkateboardProps) {
  const originRef = useRef<THREE.Group>(null);
  const boardRef = useRef<THREE.Group>(null);
  const [animating, setAnimating] = useState(false);
  const [showHotspots, setShowHotspots] = useState({
    front: true,
    middle: true,
    back: true,
  });

  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(-0.2, 0.15, 0);

    function setZoom() {
      const scale = Math.max(Math.min(1000 / window.innerWidth, 2.2), 1);
      camera.position.x = CAMERA_POSITION[0] * scale;
      camera.position.y = CAMERA_POSITION[1] * scale;
      camera.position.z = CAMERA_POSITION[2] * scale;
    }

    window.addEventListener("resize", setZoom);
    setZoom();

    return () => window.removeEventListener("resize", setZoom);
  }, [camera]);

  const jumpBoard = (board: THREE.Group) => {
    GSAP.timeline({ onComplete: () => setAnimating(false) })
      .to(board.position, {
        y: 0.8,
        duration: 0.51,
        ease: "powr2.out",
        delay: 0.26,
      })
      .to(board.position, { y: 0, duration: 0.43, ease: "power2.in" });
  };

  const doOllie = (board: THREE.Group) => {
    jumpBoard(board);
    GSAP.timeline()
      .to(board.rotation, { x: -0.6, duration: 0.26, ease: "none" })
      .to(board.rotation, { x: 0.4, duration: 0.82, ease: "power2.in" })
      .to(board.rotation, { x: 0, duration: 0.12, ease: "none" });
  };

  const doKickFlip = (board: THREE.Group) => {
    jumpBoard(board);
    GSAP.timeline()
      .to(board.rotation, { x: -0.6, duration: 0.26, ease: "none" })
      .to(board.rotation, { x: 0.4, duration: 0.82, ease: "power2.in" })
      .to(
        board.rotation,
        { z: `+=${Math.PI * 2}`, duration: 0.78, ease: "none" },
        0.3
      )
      .to(board.rotation, { x: 0, duration: 0.12, ease: "none" });
  };

  const do360Flip = (board: THREE.Group) => {
    const origin = originRef.current;
    if (!origin) return;
    doOllie(board);
    GSAP.timeline().to(origin.rotation, {
      y: `+=${Math.PI * 2}`,
      duration: 0.7,
      delay: 0.32,
      ease: "none",
    });
  };

  const tricks: Record<string, (board: THREE.Group) => void | undefined> = {
    front: do360Flip,
    middle: doKickFlip,
    back: doOllie,
  };

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    const board = boardRef.current;
    if (!board || animating) return;
    const trickName = e.eventObject.name;

    setAnimating(true);

    const trick = tricks[trickName];
    setShowHotspots((cur) => ({ ...cur, [trickName]: false }));
    if (trick) {
      trick(board);
    } else {
      setAnimating(false);
    }
  };

  useGSAP(() => {
    const sceneGroup = boardRef.current;
    const origin = originRef.current;
    if (!sceneGroup || !origin) return;
    GSAP.timeline({ repeat: -1, yoyo: true, ease: "sine" })
      .to(sceneGroup.position, { x: 0.1, duration: 1.6 })
      .to(sceneGroup.position, { x: -0.1, duration: 1.4 });
    GSAP.timeline({ repeat: -1, yoyo: true, ease: "sine" })
      .to(origin.rotation, { z: 0.1, duration: 1.6 })
      .to(origin.rotation, { z: -0.1, duration: 1.4 });
  }, [boardRef]);

  return (
    <group {...props} position={[0, 0.1, 0]} dispose={null}>
      <group ref={originRef}>
        <group position={[-0.25, 0, -0.635]} ref={boardRef}>
          <group position={[0, -0.086, 0.635]}>
            <Skateboard {...props} constantWheelSpin pose="upright" />

            {/* front deck */}
            <Hotspot
              position={[0, 0.33, 0.9]}
              isVisible={!animating && showHotspots.front}
              color="#d9f154"
            />
            <mesh
              position={[0, 0.27, 0.9]}
              visible={false}
              name="front"
              onClick={onClick}
            >
              <boxGeometry args={[0.5, 0.2, 0.58]} />
              <meshStandardMaterial />
            </mesh>

            {/* middle deck */}
            <Hotspot
              position={[0, 0.3, 0]}
              isVisible={!animating && showHotspots.middle}
              color="#ff7347"
            />
            <mesh
              position={[0, 0.27, 0]}
              visible={false}
              name="middle"
              onClick={onClick}
            >
              <boxGeometry args={[0.6, 0.1, 1.2]} />
              <meshStandardMaterial />
            </mesh>
            {/* back deck */}
            <Hotspot
              position={[0, 0.33, -0.9]}
              isVisible={!animating && showHotspots.back}
              color="#2e3192"
            />
            <mesh
              position={[0, 0.27, -0.9]}
              visible={false}
              name="back"
              onClick={onClick}
            >
              <boxGeometry args={[0.5, 0.2, 0.58]} />
              <meshStandardMaterial />
            </mesh>
          </group>
        </group>
      </group>
      <ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
      <group
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        position={[0, -0.09, -0.5]}
        scale={[0.2, 0.2, 0.2]}
      >
        <Html
          wrapperClass="pointer-event-none"
          transform
          zIndexRange={[1, 0]}
          occlude={"blending"}
        >
          <WavyPaths />
        </Html>
      </group>
    </group>
  );
}
