'use client'

import { motion } from 'framer-motion-3d'
import React, { useRef } from 'react'
import { useGLTF, Text } from '@react-three/drei'

export function CardHolder(props) {


    const { section, setSetion } = props;
    const { nodes, materials } = useGLTF('/models/CardHolder.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials['50_Euro_Schein']}
                position={[-0.142, 1.633, -0.066]}
                rotation={[1.577, 0.001, -3.136]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.Band}
                position={[-0.062, 1.503, 0.167]}
                rotation={[1.577, 0.001, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials.Front_logo}
                position={[-0.062, 1.503, 0.167]}
                rotation={[1.577, 0.001, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials.PaletteMaterial001}
                position={[-0.532, 0.417, 0.118]}
                rotation={[1.577, 0.001, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_16.geometry}
                material={materials.Cash_plate}
                position={[-0.029, 1.44, 0.119]}
                rotation={[1.577, 0.001, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_20.geometry}
                material={materials.Organspendeausweis}
                position={[-0.029, 1.448, 0.061]}
                rotation={[1.577, 0.001, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_22.geometry}
                material={materials.Sparkassenkarte}
                position={[-0.029, 1.452, 0.035]}
                rotation={[1.577, 0.001, 0.006]}
            />
            <group position={[0.345, 0.075, -0.072]} rotation={[0.529, -0.953, 0.469]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0.geometry}
                    material={materials['Metall.001']}
                    position={[0, 1.427, 0.001]}
                    rotation={[1.278, -0.028, -1.022]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0001.geometry}
                    material={materials['Metall.001']}
                    position={[-0.133, 1.407, -0.076]}
                    rotation={[1.278, -0.028, -1.022]}
                />
            </group>
            <motion.group transition={{ delay: 10, duration: 3 }} animate={{ y: section === 5 ? 0.3 : -0.6 }}>
                <mesh
                    onClick={() => setSetion(6)}
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials['Material.001']}
                    position={[-0.053, 2.924, 0.057]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={0.736}
                />
            </motion.group>
            {section === 5 ? (
                <motion.group animate={{ x: 1, y: 6, z: 1, rotateX: 0.2, rotateY: 1.3, rotateZ: 1.1 }} >
                <Text fontWeight={500} fontSize={0.7} color="white">Tap to Pay</Text>
                <motion.group animate={{ x: -2.1, y: -0., z:0 }}>
                    <motion.group
                        animate={{ scale: [0.5, 0.4, 0.6] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        <Text fontSize={1.5} color="orange">o</Text>
                        <Text fontSize={2} position={[0, 0.48, 0]} color="orange">.</Text>
                    </motion.group>
                </motion.group>
            </motion.group>
            ):(<group/>)}
            
        </group>
    )
}

useGLTF.preload('/models/CardHolder.glb')
