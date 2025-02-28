"use client";
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { useEffect, useMemo, useRef } from "react";
import GSAP from "gsap";
import { useGSAP } from "@gsap/react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

GSAP.registerPlugin(useGSAP);

type SkateboardProps = {
  deckTextureUrls: string[];
  deckTextureUrl: string;
  wheelsTextureUrls: string[];
  wheelsTextureUrl: string;
  truckColor: string;
  boltsColor: string;
  constantWheelSpin?: boolean;
  pose: "upright" | "side";
};

type GLTFResult = GLTF & {
  nodes: {
    GripTape: THREE.Mesh;
    Wheel1: THREE.Mesh;
    Wheel2: THREE.Mesh;
    Wheel3: THREE.Mesh;
    Wheel4: THREE.Mesh;
    Deck: THREE.Mesh;
    Baseplates: THREE.Mesh;
    Bolts: THREE.Mesh;
    Truck1: THREE.Mesh;
    Truck2: THREE.Mesh;
  };
  materials: {};
};

export function Skateboard({
  deckTextureUrls,
  deckTextureUrl,
  wheelsTextureUrls,
  wheelsTextureUrl,
  truckColor,
  boltsColor,
  constantWheelSpin = false,
  pose = "upright",
  ...props
}: SkateboardProps) {
  const { nodes } = useGLTF("/skateboard.gltf") as GLTFResult;
  // Refs
  const boardRef = useRef<THREE.Group>(null);
  const WheelRefs = useRef<THREE.Object3D[]>([]);

  const addToWheelRefs = (wheelRef: THREE.Object3D | null) => {
    if (wheelRef && !WheelRefs.current.includes(wheelRef)) {
      WheelRefs.current.push(wheelRef);
    }
  };

  // GripTape materials
  const gripTapeDiffuse = useTexture("/skateboard/griptape-diffuse.webp");
  const gripTapeRoughness = useTexture("/skateboard/griptape-roughness.webp");
  const gripTapeMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
      map: gripTapeDiffuse,
      bumpMap: gripTapeRoughness,
      roughnessMap: gripTapeRoughness,
      bumpScale: 3.5,
      roughness: 0.8,
      color: "#555555",
    });
    if (gripTapeDiffuse) {
      gripTapeDiffuse.wrapS = THREE.RepeatWrapping;
      gripTapeDiffuse.wrapT = THREE.RepeatWrapping;
      gripTapeDiffuse.repeat.set(9, 9);
      gripTapeDiffuse.colorSpace = THREE.SRGBColorSpace;
      gripTapeDiffuse.needsUpdate = true;
    }

    if (gripTapeRoughness) {
      gripTapeRoughness.wrapS = THREE.RepeatWrapping;
      gripTapeRoughness.wrapT = THREE.RepeatWrapping;
      gripTapeRoughness.repeat.set(9, 9);
      gripTapeRoughness.anisotropy = 8;
      gripTapeRoughness.needsUpdate = true;
    }
    return material;
  }, [gripTapeDiffuse, gripTapeRoughness]);

  // Deck materials
  const deckTextures = useTexture(deckTextureUrls);
  deckTextures.forEach((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  });

  const deckMaterial = useMemo(() => {
    const deckTexture = deckTextures.find(
      (texture) => texture.image.src === deckTextureUrl
    );
    const material = new THREE.MeshStandardMaterial({
      map: deckTexture,
      roughness: 0.8,
    });
    return material;
  }, [deckTextureUrl]);

  // Bolts material
  const boltsMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        metalness: 0.7,
        roughness: 0.2,
        color: boltsColor,
      }),
    [boltsColor]
  );

  // trucks material
  const metalNormal = useTexture("/skateboard/metal-normal.avif");
  metalNormal.wrapS = THREE.RepeatWrapping;
  metalNormal.wrapT = THREE.RepeatWrapping;
  metalNormal.anisotropy = 8;
  metalNormal.repeat.set(8, 8);
  const trucksMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        metalness: 0.8,
        roughness: 0.25,
        normalMap: metalNormal,
        normalScale: new THREE.Vector2(0.3, 0.3),
        color: truckColor,
      }),
    [truckColor]
  );

  // wheels material
  // loading all wheels textures images
  const wheelsTextureMaps = useTexture(wheelsTextureUrls);
  wheelsTextureMaps.forEach((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  });
  // getting the current wheel texture and creating the material
  const wheelTexture = useMemo(() => {
    const wheelsTextureMap = wheelsTextureMaps.find(
      (texture) => texture.image.src === wheelsTextureUrl
    );
    const texture = new THREE.MeshStandardMaterial({
      roughness: 0.3,
      map: wheelsTextureMap,
    });
    return texture;
  }, [wheelsTextureMaps, wheelsTextureUrl]);

  // Animations
  useFrame((state, delta) => {
    const wheelsRefsArray = WheelRefs.current;
    if (!wheelsRefsArray.length || !constantWheelSpin) return;

    wheelsRefsArray.forEach((wheel) => {
      wheel.rotation.x += delta * 10;
    });
  });

  useEffect(() => {
    const wheels = WheelRefs.current;
    if (!wheels.length || constantWheelSpin) return;
    wheels.forEach((wheel) => {
      GSAP.to(wheel.rotation, {
        x: `-=${Math.PI * 6}`,
        duration: 1.5,
        ease: "power2.inOut",
      });
    });
  }, [wheelTexture, constantWheelSpin]);

  const positions = useMemo(
    () =>
      ({
        upright: {
          rotation: [0, 0, 0],
          position: [0, 0, 0],
        },
        side: {
          rotation: [0, 0, Math.PI / 2],
          position: [0, 0.295, 0],
        },
      } as const),
    []
  );
  return (
    <group
      position={positions[pose].position}
      rotation={positions[pose].rotation}
      {...props}
      castShadow
      receiveShadow
    >
      <group ref={boardRef} name="Scene">
        <mesh
          name="GripTape"
          castShadow
          receiveShadow
          geometry={nodes.GripTape.geometry}
          material={gripTapeMaterial}
          position={[0, 0.286, -0.002]}
        />
        <mesh
          name="Wheel1"
          ref={addToWheelRefs}
          castShadow
          receiveShadow
          geometry={nodes.Wheel1.geometry}
          material={wheelTexture}
          position={[0.238, 0.086, 0.635]}
        />
        <mesh
          name="Wheel2"
          ref={addToWheelRefs}
          castShadow
          receiveShadow
          geometry={nodes.Wheel2.geometry}
          material={wheelTexture}
          position={[-0.237, 0.086, 0.635]}
        />
        <mesh
          name="Wheel3"
          ref={addToWheelRefs}
          castShadow
          receiveShadow
          geometry={nodes.Wheel3.geometry}
          material={wheelTexture}
          position={[0.237, 0.086, -0.635]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Wheel4"
          ref={addToWheelRefs}
          castShadow
          receiveShadow
          geometry={nodes.Wheel4.geometry}
          material={wheelTexture}
          position={[-0.238, 0.086, -0.635]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Deck"
          castShadow
          receiveShadow
          geometry={nodes.Deck.geometry}
          material={deckMaterial}
          position={[0, 0.271, -0.002]}
        />
        <mesh
          name="Bolts"
          castShadow
          receiveShadow
          geometry={nodes.Bolts.geometry}
          material={boltsMaterial}
          position={[0, 0.198, 0]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Baseplates"
          castShadow
          receiveShadow
          geometry={nodes.Baseplates.geometry}
          material={trucksMaterial}
          position={[0, 0.211, 0]}
        />
        <mesh
          name="Truck1"
          castShadow
          receiveShadow
          geometry={nodes.Truck1.geometry}
          material={trucksMaterial}
          position={[0, 0.101, -0.617]}
        />
        <mesh
          name="Truck2"
          castShadow
          receiveShadow
          geometry={nodes.Truck2.geometry}
          material={trucksMaterial}
          position={[0, 0.101, 0.617]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/skateboard.gltf");
