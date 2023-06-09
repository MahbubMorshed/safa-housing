/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("./SafaHousing.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.ground}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_1.geometry}
        material={materials.Road}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mainRoad.geometry}
        material={materials.Road}
        position={[0, 0, 33.78]}
        scale={[34.17, 1, 1.83]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall2.geometry}
        material={materials.wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall1.geometry}
        material={materials.wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall3.geometry}
        material={materials.wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall4.geometry}
        material={materials.wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall5.geometry}
        material={materials.wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall6.geometry}
        material={materials.wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall7.geometry}
        material={materials.wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall8.geometry}
        material={materials.wall}
      />
    </group>
  );
}

useGLTF.preload("./SafaHousing.glb");

export default Model;
