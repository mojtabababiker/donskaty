"use client";

import * as THREE from "three";
import {
  CameraControls,
  Environment,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { useCustomizerControls } from "./Context";
import { asImageSrc } from "@prismicio/client";
import { Skateboard } from "../3DModels/Skateboard";

const CAMERA_POSITION = [2.5, 1, 0] as const;

const DEFAULT_DECK_TEXTURE = "/skateboard/Deck.webp";
const DEFAULT_WHEEL_TEXTURE = "/skateboard/Wheel.webp";
const DEFAULT_TRUCK_COLOR = "#333333";
const DEFAULT_BOLTS_COLOR = "#333333";

type Props = {
  wheelsTexturesUrls: string[];
  decksTexturesUrls: string[];
};

function Preview({ wheelsTexturesUrls, decksTexturesUrls }: Props) {
  const CameraControlsRef = useRef<CameraControls>(null);
  const floorRef = useRef<THREE.Mesh>(null);
  const { selectedWheel, selectedDeck, selectedTruck, selectedBolt } =
    useCustomizerControls();

  const wheelTextureUrl =
    asImageSrc(selectedWheel?.texture) || DEFAULT_WHEEL_TEXTURE;
  const deckTextureUrl =
    asImageSrc(selectedDeck?.texture) || DEFAULT_DECK_TEXTURE;
  const truckColor = selectedTruck?.color || DEFAULT_TRUCK_COLOR;
  const boltColor = selectedBolt?.color || DEFAULT_BOLTS_COLOR;

  // Set camera position based on the selected deck
  useEffect(() => {
    setCameraControl(
      new THREE.Vector3(0, 0.3, 0),
      new THREE.Vector3(1.5, 0.8, 0)
    );
  }, [selectedDeck]);

  // Set camera position and target on the selected truck
  useEffect(() => {
    setCameraControl(
      new THREE.Vector3(-0.12, 0.29, 0.57),
      new THREE.Vector3(0.1, 0.25, 0.9)
    );
  }, [selectedTruck]);

  useEffect(() => {
    setCameraControl(
      new THREE.Vector3(-0.08, 0.54, 0.64),
      new THREE.Vector3(0.09, 1, 0.9)
    );
  }, [selectedWheel]);

  useEffect(() => {
    setCameraControl(
      new THREE.Vector3(-0.25, 0.3, 0.62),
      new THREE.Vector3(-0.5, 0.35, 0.8)
    );
  }, [selectedBolt]);

  const setCameraControl = (target: THREE.Vector3, pos: THREE.Vector3) => {
    if (!CameraControlsRef.current) return;

    CameraControlsRef.current.setPosition(pos.x, pos.y, pos.z, true);
    CameraControlsRef.current.setTarget(target.x, target.y, target.z, true);
  };

  const onCameraStart = () => {
    if (
      !CameraControlsRef.current ||
      !floorRef.current ||
      CameraControlsRef.current.colliderMeshes.length
    )
      return;
    CameraControlsRef.current.colliderMeshes = [floorRef.current];
  };
  return (
    <Canvas shadows camera={{ position: CAMERA_POSITION, fov: 50 }}>
      <CameraControls
        makeDefault
        ref={CameraControlsRef}
        minDistance={0.8}
        maxDistance={4}
        onStart={onCameraStart}
      />
      <Environment
        files={"/hdr/warehouse-512.hdr"}
        environmentIntensity={0.6}
      />
      <directionalLight
        intensity={1.6}
        lookAt={[0, 0, 0]}
        position={[1, 1, 1]}
        castShadow
      />
      <fog attach="fog" args={["#333333", 3, 8]} />
      <color attach={"background"} args={["#333333"]} />
      <Suspense fallback={null}>
        <group position={[0, 0, 0]}>
          <Skateboard
            deckTextureUrl={deckTextureUrl}
            wheelsTextureUrl={wheelTextureUrl}
            deckTextureUrls={decksTexturesUrls}
            wheelsTextureUrls={wheelsTexturesUrls}
            truckColor={truckColor}
            boltsColor={boltColor}
            pose="side"
          />
          <StageFloor />
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0.01, 0]}
            ref={floorRef}
          >
            <planeGeometry args={[6, 6]} />
            <meshStandardMaterial visible={false} />
          </mesh>
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

function StageFloor() {
  const normalMap = useTexture("/concrete-normal.avif");
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(4, 4);
  normalMap.anisotropy = 8;

  const material = new THREE.MeshStandardMaterial({
    color: "#333333",
    metalness: 0.1,
    roughness: 0.75,
    normalMap,
  });

  return (
    <mesh
      rotation-x={-Math.PI / 2}
      position={[0, -0.005, 0]}
      castShadow
      receiveShadow
      material={material}
    >
      <circleGeometry args={[20, 32]} />
    </mesh>
  );
}

export default Preview;
