// components/ThreeScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export const Heading = () => {
    const meshRef = useRef();

    // Load the texture
    const texture = useLoader(TextureLoader, '/image/headinglanding .png');

    // Set up the scene
    useEffect(() => {
        meshRef.current.material.map = texture;
        meshRef.current.material.opacity = 1.0; // Adjust opacity here (0.0 - 1.0)
        meshRef.current.material.transparent = true; // Enable transparency
    }, [texture]);
    
    // Animation loop
    useFrame(() => {
        // meshRef.current.rotation.x += 0.01;
        // meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial />
        </mesh>
    );
};


