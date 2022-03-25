/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Saturn001: THREE.Mesh;
        RingsTop: THREE.Mesh;
        RingsBottom: THREE.Mesh;
    };
    materials: {
        None: THREE.MeshStandardMaterial;
        SaturnRings: THREE.MeshStandardMaterial;
    };
};

export default function SaturnModel({
    ...props
}: JSX.IntrinsicElements["group"]) {
    const group = useRef<THREE.Group>();
    const { nodes, materials } = useGLTF(
        "models/Saturn_1_120536.gltf"
    ) as GLTFResult;
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Saturn001.geometry} material={materials.None}>
                {/* <meshStandardMaterial /> */}
            </mesh>
            {/* <mesh
                geometry={nodes.RingsTop.geometry}
                material={nodes.RingsTop.material}
            />
            <mesh
                geometry={nodes.RingsBottom.geometry}
                material={nodes.RingsBottom.material}
            /> */}
        </group>
    );
}

useGLTF.preload("/Saturn_1_120536.gltf");