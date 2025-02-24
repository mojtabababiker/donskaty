import * as THREE from "three";
import GSAP from "gsap";
import { Billboard } from "@react-three/drei";
import { useEffect, useRef } from "react";

type Props = {
  position: [number, number, number];
  isVisible: boolean;
  color?: string;
};

export function Hotspot({ position, isVisible, color = "#d9f154" }: Props) {
  const spotRef = useRef<THREE.Mesh>(null);
  // useEffect(() => {
  //   const spot = spotRef.current;
  //   if (!spot) return;
  //   GSAP.timeline({ repeat: -1 })
  //     .to(spot.geometry, {
  //       scale: 1.07,
  //       duration: 0.5,
  //       ease: "circ.inOut",
  //     })
  //     .to(
  //       spot.material,
  //       {
  //         opacity: 0,
  //         duration: 0.5,
  //         ease: "circ.inOut",
  //       },
  //       0.3
  //     )
  //     .to(spot.geometry, {
  //       scale: 1.07,
  //       duration: 0.5,
  //       ease: "circ.inOut",
  //     })
  //     .to(
  //       spot.material,
  //       {
  //         opacity: 1,
  //         duration: 0.5,
  //         ease: "circ.inOut",
  //       },
  //       "+=0.3"
  //     );
  // }, [spotRef]);
  return (
    <Billboard position={position} follow>
      <mesh visible={isVisible} ref={spotRef}>
        <circleGeometry args={[0.01, 32]} />
        <meshStandardMaterial color={color} transparent opacity={1} />
      </mesh>

      <mesh visible={isVisible}>
        <circleGeometry args={[0.03, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Billboard>
  );
}
