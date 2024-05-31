'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Restaurant(props) {
  const { nodes, materials } = useGLTF('/models/Restaurant2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������_Material_#33_0'].geometry}
        material={materials.PaletteMaterial001}
        position={[18.32, -0.322, -1.346]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������_Material_#29_0'].geometry}
        material={materials.Material_29}
        position={[0.832, 1.871, 18.154]}
        scale={[0.995, 2.267, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#26_0'].geometry}
        material={materials.Material_26}
        position={[9.129, -0.322, -1.346]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������002_Material_#28_0002'].geometry}
        material={materials.Material_28}
        position={[6.885, -0.454, 10.144]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������003_Material_#39_0'].geometry}
        material={materials.Material_39}
        position={[-8.801, -0.322, 13.498]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������006_Material_#37_0'].geometry}
        material={materials.Material_37}
        position={[-10.914, -0.322, 11.385]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������001_M'].geometry}
        material={materials.Material_38}
        position={[-0.337, 1.779, 16.709]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������002_M'].geometry}
        material={materials.Material_36}
        position={[-0.337, 1.779, 17.694]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������_Material_#30_0'].geometry}
        material={materials.PaletteMaterial002}
        position={[1.567, 1.93, 11.391]}
        scale={[1.668, 1.232, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_1_book_mtl_ai_0.geometry}
        material={materials.book_mtl_ai}
        position={[-14.344, 1.704, -1.123]}
        rotation={[0, -0.672, Math.PI / 2]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.001']}
        position={[-19.616, 4.553, -1.642]}
        rotation={[-1.636, 0, Math.PI / 2]}
        scale={[-3.739, -0.384, -3.739]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Terminal001_Material_#2100454184_0'].geometry}
        material={materials.Material_2100454184}
        position={[-5.378, 2.08, -1.343]}
        rotation={[0, -1.194, -0.278]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Terminal001_Material_#2100454185_0'].geometry}
        material={materials.Material_2100454185}
        position={[-5.378, 2.08, -1.343]}
        rotation={[0, -1.194, -0.278]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_0.geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-6.941, 1.683, -0.646]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.116}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Display_ActiveArea}
        position={[-6.941, 1.683, -0.646]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.116}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[6.164, 2.78, -8.697]}
        scale={[7.669, 4.644, 7.669]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tabletop_tabletop_0.geometry}
        material={materials.tabletop}
        position={[6.798, 1.729, -8.697]}
        rotation={[-Math.PI / 2, 0, -3.139]}
        scale={0.683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_tex_u1_v1_0003.geometry}
        material={materials['tex_u1_v1.005']}
        position={[6.764, 2.591, -6.553]}
        rotation={[1.614, -0.089, 0.174]}
        scale={[0.089, 0.089, 0.042]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-19.626, 4.561, -1.605]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={1.336}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.005']}
        position={[-14.503, 6.284, -17.562]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[1.554, 0.04, 2.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.006']}
        position={[-9.741, 6.284, -17.562]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[1.554, 0.04, 2.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['Material.009']}
        position={[-5.042, 6.284, -17.562]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[1.554, 0.04, 2.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#42_0'].geometry}
        material={materials.Material_42}
        position={[1.413, 0.582, 17.694]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#42_0001'].geometry}
        material={materials.Material_42}
        position={[1.413, 0.582, 15.725]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#42_0002'].geometry}
        material={materials.Material_42}
        position={[0.953, 1.474, 17.366]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#41_0'].geometry}
        material={materials.Material_41}
        position={[1.413, 0.582, 17.694]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#41_0001'].geometry}
        material={materials.Material_41}
        position={[1.413, 0.582, 15.725]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#41_0002'].geometry}
        material={materials.Material_41}
        position={[0.953, 1.474, 17.366]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#40_0'].geometry}
        material={materials.Material_40}
        position={[1.413, 0.582, 17.694]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#40_0001'].geometry}
        material={materials.Material_40}
        position={[1.413, 0.582, 15.725]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#40_0002'].geometry}
        material={materials.Material_40}
        position={[0.953, 1.474, 17.366]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.413, 0.582, 15.725]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#001'].geometry}
        material={materials.PaletteMaterial001}
        position={[0.953, 1.474, 17.366]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#43_0'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.413, 0.582, 17.694]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#002'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.413, 0.582, 17.694]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#003'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.413, 0.582, 15.725]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#004'].geometry}
        material={materials.PaletteMaterial001}
        position={[0.953, 1.474, 17.366]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#005'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.413, 0.582, 17.694]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#006'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.413, 0.582, 15.725]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#007'].geometry}
        material={materials.PaletteMaterial001}
        position={[0.953, 1.474, 17.366]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������_Material_#33_0001'].geometry}
        material={materials.PaletteMaterial001}
        position={[0.483, 3.289, 18.187]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������_Material_#33_0002'].geometry}
        material={materials.PaletteMaterial001}
        position={[0.483, 3.289, 6.697]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0'].geometry}
        material={materials.PaletteMaterial002}
        position={[-0.994, 2.364, -5.735]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0001'].geometry}
        material={materials.PaletteMaterial002}
        position={[-0.337, 2.364, -5.735]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0002'].geometry}
        material={materials.PaletteMaterial002}
        position={[-1.65, 2.364, -5.735]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0003'].geometry}
        material={materials.PaletteMaterial002}
        position={[-1.65, 2.364, -6.392]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0004'].geometry}
        material={materials.PaletteMaterial002}
        position={[-0.994, 2.364, -6.392]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0005'].geometry}
        material={materials.PaletteMaterial002}
        position={[-0.337, 2.364, -6.392]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0006'].geometry}
        material={materials.PaletteMaterial002}
        position={[-19.049, 3.583, -16.25]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0007'].geometry}
        material={materials.PaletteMaterial002}
        position={[-19.049, 3.583, -16.644]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0008'].geometry}
        material={materials.PaletteMaterial002}
        position={[-18.393, 3.583, -16.25]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0009'].geometry}
        material={materials.PaletteMaterial002}
        position={[-18.393, 3.583, -16.644]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0010'].geometry}
        material={materials.PaletteMaterial002}
        position={[5.694, 0.854, -10.744]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0011'].geometry}
        material={materials.PaletteMaterial002}
        position={[5.694, 0.854, -10.416]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0012'].geometry}
        material={materials.PaletteMaterial002}
        position={[5.694, 0.854, -10.088]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0013'].geometry}
        material={materials.PaletteMaterial002}
        position={[8.076, 0.854, -5.735]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0014'].geometry}
        material={materials.PaletteMaterial002}
        position={[8.076, 0.854, -6.064]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0015'].geometry}
        material={materials.PaletteMaterial002}
        position={[8.076, 0.854, -10.003]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0016'].geometry}
        material={materials.PaletteMaterial002}
        position={[8.076, 0.854, -10.331]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0017'].geometry}
        material={materials.PaletteMaterial002}
        position={[8.076, 0.854, -10.66]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#28_0001'].geometry}
        material={materials.Material_28}
        position={[-8.801, -0.322, 9.273]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#28_0002'].geometry}
        material={materials.Material_28}
        position={[-8.801, -0.322, 11.385]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#28_0003'].geometry}
        material={materials.Material_28}
        position={[-8.801, -0.322, 13.498]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#28_0004'].geometry}
        material={materials.Material_28}
        position={[-8.801, -0.322, 15.611]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#28_0005'].geometry}
        material={materials.Material_28}
        position={[-10.914, -0.322, 9.273]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#28_0006'].geometry}
        material={materials.Material_28}
        position={[-10.914, -0.322, 11.385]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#28_0007'].geometry}
        material={materials.Material_28}
        position={[-10.914, -0.322, 13.498]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#28_0008'].geometry}
        material={materials.Material_28}
        position={[-10.914, -0.322, 15.611]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#36_0'].geometry}
        material={materials.Material_36}
        position={[-8.801, -0.322, 9.273]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#36_0001'].geometry}
        material={materials.Material_36}
        position={[-8.801, -0.322, 15.611]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#36_0002'].geometry}
        material={materials.Material_36}
        position={[-10.914, -0.322, 13.498]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������002_Material_#38_0'].geometry}
        material={materials.Material_38}
        position={[-8.801, -0.322, 11.385]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������002_Material_#38_0001'].geometry}
        material={materials.Material_38}
        position={[-10.914, -0.322, 9.273]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������002_Material_#38_0002'].geometry}
        material={materials.Material_38}
        position={[-10.914, -0.322, 15.611]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.342, 1.342, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0001'].geometry}
        material={materials.PaletteMaterial001}
        position={[-19.542, 4.274, 16.381]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0002'].geometry}
        material={materials.PaletteMaterial001}
        position={[-19.542, 4.274, 12.442]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0003'].geometry}
        material={materials.PaletteMaterial001}
        position={[-19.542, 4.274, 8.502]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0004'].geometry}
        material={materials.PaletteMaterial001}
        position={[6.885, 4.274, -17.268]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0005'].geometry}
        material={materials.PaletteMaterial001}
        position={[10.824, 4.274, -17.268]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0006'].geometry}
        material={materials.PaletteMaterial001}
        position={[2.946, 4.274, -17.268]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#31_0001'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 1.779, 8.831]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#31_0002'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 1.779, 9.816]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#31_0004'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 1.779, 7.846]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������001_M001'].geometry}
        material={materials.Material_36}
        position={[-18.393, 1.779, 16.709]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������001_M002'].geometry}
        material={materials.Material_36}
        position={[-19.049, 1.779, 15.396]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������001_M003'].geometry}
        material={materials.Material_36}
        position={[-0.994, 1.779, -12.836]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������001_Mater'].geometry}
        material={materials.Material_36}
        position={[-0.994, 1.779, 7.846]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#31_0003'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.337, 1.779, 17.694]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#31_0005'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.337, 1.779, 16.709]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0018'].geometry}
        material={materials.PaletteMaterial002}
        position={[-0.994, 2.784, -9.553]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.752, 2.502, 2.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0019'].geometry}
        material={materials.PaletteMaterial002}
        position={[-0.994, 2.784, -10.538]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.752, 2.502, 2.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0020'].geometry}
        material={materials.PaletteMaterial002}
        position={[-0.994, 2.784, -11.523]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.752, 2.502, 2.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0021'].geometry}
        material={materials.PaletteMaterial002}
        position={[-18.721, 2.784, -10.538]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.752, 2.502, 2.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#30_0022'].geometry}
        material={materials.PaletteMaterial002}
        position={[-18.721, 2.784, -9.553]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.752, 2.502, 2.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0007'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 1.779, -9.553]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.752, 2.502, 2.129]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0008'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 1.779, -10.538]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.752, 2.502, 2.129]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0009'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 1.779, -11.523]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.752, 2.502, 2.129]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0010'].geometry}
        material={materials.PaletteMaterial001}
        position={[-18.721, 1.779, -10.538]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.752, 2.502, 2.129]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#33_0011'].geometry}
        material={materials.PaletteMaterial001}
        position={[-18.721, 1.779, -9.553]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.752, 2.502, 2.129]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������002_M001'].geometry}
        material={materials.Material_38}
        position={[-19.049, 1.779, 16.053]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������002_M002'].geometry}
        material={materials.Material_38}
        position={[-0.994, 1.779, -13.821]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������002_Mater'].geometry}
        material={materials.Material_38}
        position={[-0.994, 1.779, 8.831]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������003_M'].geometry}
        material={materials.Material_39}
        position={[-18.393, 1.779, 15.396]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������003_Mater'].geometry}
        material={materials.Material_39}
        position={[-0.994, 1.779, 9.816]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������004__0'].geometry}
        material={materials.PaletteMaterial001}
        position={[-18.393, 1.779, 16.709]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������004__0001'].geometry}
        material={materials.PaletteMaterial001}
        position={[-18.393, 1.779, 16.053]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������004__0002'].geometry}
        material={materials.PaletteMaterial001}
        position={[-18.393, 1.779, 15.396]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������004__0003'].geometry}
        material={materials.PaletteMaterial001}
        position={[-19.049, 1.779, 16.709]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������004__0004'].geometry}
        material={materials.PaletteMaterial001}
        position={[-19.049, 1.779, 16.053]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������004__0005'].geometry}
        material={materials.PaletteMaterial001}
        position={[-19.049, 1.779, 15.396]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������004__0006'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 1.779, -14.806]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������004__0007'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 1.779, -13.821]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������004__0008'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 1.779, -12.836]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������005_M'].geometry}
        material={materials.Material_37}
        position={[-19.049, 1.779, 16.709]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������005_M001'].geometry}
        material={materials.Material_37}
        position={[-0.994, 1.779, -14.806]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������������������005_Mater'].geometry}
        material={materials.Material_37}
        position={[-18.393, 1.779, 16.053]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������_Material_#31_0001'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.567, 1.93, 14.674]}
        scale={[1.668, 1.232, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������_Material_#31_0002'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.567, 1.93, 11.194]}
        scale={[1.668, 1.232, 1.668]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���001_Material_#31_0'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.961, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���001_Material_#31_0001'].geometry}
        material={materials.PaletteMaterial001}
        position={[3.602, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���001_Material_#31_0002'].geometry}
        material={materials.PaletteMaterial001}
        position={[5.243, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���001_Material_#31_0003'].geometry}
        material={materials.PaletteMaterial001}
        position={[6.885, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���001_Material_#31_0004'].geometry}
        material={materials.PaletteMaterial001}
        position={[8.526, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���001_Material_#31_0005'].geometry}
        material={materials.PaletteMaterial001}
        position={[10.168, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���001_Material_#31_0006'].geometry}
        material={materials.PaletteMaterial001}
        position={[11.809, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���001_Material_#31_0007'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 2.435, 11.785]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���001_Material_#31_0008'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.994, 2.435, 13.755]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#008'].geometry}
        material={materials.Material_39}
        position={[10.168, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#009'].geometry}
        material={materials.Material_39}
        position={[-18.721, 2.435, 8.502]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������001_Material_#39_0'].geometry}
        material={materials.Material_39}
        position={[1.961, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#35_0'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.403, 1.844, 14.083]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#35_0001'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.403, 1.844, 13.755]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#35_0002'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.403, 0.662, 12.442]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#35_0003'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.403, 0.662, 12.114]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#35_0004'].geometry}
        material={materials.PaletteMaterial001}
        position={[1.403, 0.662, 11.785]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#39_0'].geometry}
        material={materials.Material_39}
        position={[1.403, 1.956, 14.083]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#39_0001'].geometry}
        material={materials.Material_39}
        position={[1.403, 1.956, 13.755]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#39_0002'].geometry}
        material={materials.Material_39}
        position={[1.403, 0.774, 12.442]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#39_0003'].geometry}
        material={materials.Material_39}
        position={[1.403, 0.774, 12.114]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['������001_Material_#39_0004'].geometry}
        material={materials.Material_39}
        position={[1.403, 0.774, 11.785]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������002_Material_#'].geometry}
        material={materials.Material_38}
        position={[6.885, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������002_Material_#001'].geometry}
        material={materials.Material_38}
        position={[11.809, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������002_Material_#002'].geometry}
        material={materials.Material_38}
        position={[-18.721, 2.435, 10.472]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������002_Material_#003'].geometry}
        material={materials.Material_38}
        position={[-0.994, 2.435, 11.785]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������002_Material_#38_0'].geometry}
        material={materials.Material_38}
        position={[3.602, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������003_Material_#'].geometry}
        material={materials.Material_36}
        position={[-18.721, 2.435, 12.442]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������003_Material_#36_0'].geometry}
        material={materials.Material_36}
        position={[5.243, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������005_Material_#'].geometry}
        material={materials.Material_37}
        position={[-0.994, 2.435, 13.755]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���������������005_Material_#37_0'].geometry}
        material={materials.Material_37}
        position={[8.526, 2.435, -16.447]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���011__0'].geometry}
        material={materials.PaletteMaterial001}
        position={[-18.721, 2.435, 8.502]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���011__0001'].geometry}
        material={materials.PaletteMaterial001}
        position={[-18.721, 2.435, 10.472]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['���011__0002'].geometry}
        material={materials.PaletteMaterial001}
        position={[-18.721, 2.435, 12.442]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Vase&water_Decor_vase_glass_0'].geometry}
        material={materials.PaletteMaterial003}
        position={[-13.516, 1.665, -1.64]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.001, 0.001, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Vase&water_Decor_vase_glass_0001'].geometry}
        material={materials.PaletteMaterial003}
        position={[-7.071, 1.665, -1.64]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.001, 0.001, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Vase&water_Decor_vase_glass_0002'].geometry}
        material={materials.PaletteMaterial003}
        position={[-9.971, 1.665, -12.269]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.001, 0.001, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Vase&water_Decor_vase_glass_0003'].geometry}
        material={materials.PaletteMaterial003}
        position={[9.627, 1.665, 8.784]}
        rotation={[-Math.PI / 2, 0, -3.119]}
        scale={[0.001, 0.001, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_Branch_Cut_down_0'].geometry}
        material={materials.PaletteMaterial004}
        position={[-13.522, 1.724, -1.64]}
        rotation={[-Math.PI / 2, -0.147, -1.752]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_Branch_Cut_down_0001'].geometry}
        material={materials.PaletteMaterial004}
        position={[-7.076, 1.724, -1.64]}
        rotation={[-Math.PI / 2, -0.147, -1.752]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_Branch_Cut_down_0002'].geometry}
        material={materials.PaletteMaterial004}
        position={[-9.976, 1.724, -12.269]}
        rotation={[-Math.PI / 2, -0.147, -1.752]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_Branch_Cut_down_0003'].geometry}
        material={materials.PaletteMaterial004}
        position={[9.627, 1.724, 8.79]}
        rotation={[-1.424, 0.003, -0.159]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_Main_branch_0'].geometry}
        material={materials.PaletteMaterial004}
        position={[-13.522, 1.724, -1.64]}
        rotation={[-Math.PI / 2, -0.147, -1.752]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_Main_branch_0001'].geometry}
        material={materials.PaletteMaterial004}
        position={[-7.076, 1.724, -1.64]}
        rotation={[-Math.PI / 2, -0.147, -1.752]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_Main_branch_0002'].geometry}
        material={materials.PaletteMaterial004}
        position={[-9.976, 1.724, -12.269]}
        rotation={[-Math.PI / 2, -0.147, -1.752]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_Main_branch_0003'].geometry}
        material={materials.PaletteMaterial004}
        position={[9.627, 1.724, 8.79]}
        rotation={[-1.424, 0.003, -0.159]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_front_0'].geometry}
        material={materials.PaletteMaterial004}
        position={[-13.522, 1.724, -1.64]}
        rotation={[-Math.PI / 2, -0.147, -1.752]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_front_0001'].geometry}
        material={materials.PaletteMaterial004}
        position={[-7.076, 1.724, -1.64]}
        rotation={[-Math.PI / 2, -0.147, -1.752]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_front_0002'].geometry}
        material={materials.PaletteMaterial004}
        position={[-9.976, 1.724, -12.269]}
        rotation={[-Math.PI / 2, -0.147, -1.752]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_front_0003'].geometry}
        material={materials.PaletteMaterial004}
        position={[9.627, 1.724, 8.79]}
        rotation={[-1.424, 0.003, -0.159]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-15.892, -0.346, -2.59]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_lambert1_0001.geometry}
        material={materials.lambert1}
        position={[-9.447, -0.346, -2.59]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_lambert1_0002.geometry}
        material={materials.lambert1}
        position={[-12.939, -0.346, -13.219]}
        scale={[0.036, 0.027, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_lambert1_0003.geometry}
        material={materials.lambert1}
        position={[8.744, -0.346, 11.773]}
        rotation={[-Math.PI, 1.548, -Math.PI]}
        scale={[0.036, 0.027, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.083, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0001.geometry}
        material={materials.Chair_mtl_ai}
        position={[-16.104, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0002.geometry}
        material={materials.Chair_mtl_ai}
        position={[-14.232, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0003.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.254, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0004.geometry}
        material={materials.Chair_mtl_ai}
        position={[-4.808, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0005.geometry}
        material={materials.Chair_mtl_ai}
        position={[-7.786, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0006.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.658, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0007.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.638, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0008.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.313, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0009.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.441, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0010.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.508, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0011.geometry}
        material={materials.Chair_mtl_ai}
        position={[-8.445, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0012.geometry}
        material={materials.Chair_mtl_ai}
        position={[-10.275, -0.411, -13.791]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0013.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.487, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0014.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.062, -0.411, 5.334]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0015.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.111, -0.411, 9.122]}
        rotation={[0, 0.536, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0016.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.106, -0.411, 7.292]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0017.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.924, -0.411, 8.292]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0018.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.967, -0.411, 10.224]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20_Chair_mtl_ai_0019.geometry}
        material={materials.Chair_mtl_ai}
        position={[11.009, -0.411, 12.096]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.083, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0001.geometry}
        material={materials.Chair_mtl_ai}
        position={[-16.104, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0002.geometry}
        material={materials.Chair_mtl_ai}
        position={[-14.232, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0003.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.254, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0004.geometry}
        material={materials.Chair_mtl_ai}
        position={[-4.808, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0005.geometry}
        material={materials.Chair_mtl_ai}
        position={[-7.786, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0006.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.658, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0007.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.638, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0008.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.313, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0009.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.441, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0010.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.508, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0011.geometry}
        material={materials.Chair_mtl_ai}
        position={[-8.445, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0012.geometry}
        material={materials.Chair_mtl_ai}
        position={[-10.275, -0.411, -13.791]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0013.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.487, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0014.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.062, -0.411, 5.334]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0015.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.111, -0.411, 9.122]}
        rotation={[0, 0.536, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0016.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.106, -0.411, 7.292]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0017.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.924, -0.411, 8.292]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0018.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.967, -0.411, 10.224]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21_Chair_mtl_ai_0019.geometry}
        material={materials.Chair_mtl_ai}
        position={[11.009, -0.411, 12.096]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.083, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0001.geometry}
        material={materials.Chair_mtl_ai}
        position={[-16.104, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0002.geometry}
        material={materials.Chair_mtl_ai}
        position={[-14.232, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0003.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.254, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0004.geometry}
        material={materials.Chair_mtl_ai}
        position={[-4.808, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0005.geometry}
        material={materials.Chair_mtl_ai}
        position={[-7.786, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0006.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.658, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0007.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.638, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0008.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.313, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0009.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.441, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0010.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.508, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0011.geometry}
        material={materials.Chair_mtl_ai}
        position={[-8.445, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0012.geometry}
        material={materials.Chair_mtl_ai}
        position={[-10.275, -0.411, -13.791]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0013.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.487, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0014.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.062, -0.411, 5.334]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0015.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.111, -0.411, 9.122]}
        rotation={[0, 0.536, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0016.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.106, -0.411, 7.292]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0017.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.924, -0.411, 8.292]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0018.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.967, -0.411, 10.224]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22_Chair_mtl_ai_0019.geometry}
        material={materials.Chair_mtl_ai}
        position={[11.009, -0.411, 12.096]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.083, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0001.geometry}
        material={materials.Chair_mtl_ai}
        position={[-16.104, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0002.geometry}
        material={materials.Chair_mtl_ai}
        position={[-14.232, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0003.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.254, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0004.geometry}
        material={materials.Chair_mtl_ai}
        position={[-4.808, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0005.geometry}
        material={materials.Chair_mtl_ai}
        position={[-7.786, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0006.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.658, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0007.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.638, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0008.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.313, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0009.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.441, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0010.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.508, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0011.geometry}
        material={materials.Chair_mtl_ai}
        position={[-8.445, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0012.geometry}
        material={materials.Chair_mtl_ai}
        position={[-10.275, -0.411, -13.791]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0013.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.487, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0014.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.062, -0.411, 5.334]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0015.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.111, -0.411, 9.122]}
        rotation={[0, 0.536, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0016.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.106, -0.411, 7.292]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0017.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.924, -0.411, 8.292]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0018.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.967, -0.411, 10.224]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23_Chair_mtl_ai_0019.geometry}
        material={materials.Chair_mtl_ai}
        position={[11.009, -0.411, 12.096]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.083, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0001.geometry}
        material={materials.Chair_mtl_ai}
        position={[-16.104, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0002.geometry}
        material={materials.Chair_mtl_ai}
        position={[-14.232, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0003.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.254, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0004.geometry}
        material={materials.Chair_mtl_ai}
        position={[-4.808, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0005.geometry}
        material={materials.Chair_mtl_ai}
        position={[-7.786, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0006.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.658, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0007.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.638, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0008.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.313, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0009.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.441, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0010.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.508, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0011.geometry}
        material={materials.Chair_mtl_ai}
        position={[-8.445, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0012.geometry}
        material={materials.Chair_mtl_ai}
        position={[-10.275, -0.411, -13.791]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0013.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.487, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0014.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.062, -0.411, 5.334]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0015.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.111, -0.411, 9.122]}
        rotation={[0, 0.536, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0016.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.106, -0.411, 7.292]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0017.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.924, -0.411, 8.292]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0018.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.967, -0.411, 10.224]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16_Chair_mtl_ai_0019.geometry}
        material={materials.Chair_mtl_ai}
        position={[11.009, -0.411, 12.096]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.083, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0001.geometry}
        material={materials.Chair_mtl_ai}
        position={[-16.104, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0002.geometry}
        material={materials.Chair_mtl_ai}
        position={[-14.232, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0003.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.254, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0004.geometry}
        material={materials.Chair_mtl_ai}
        position={[-4.808, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0005.geometry}
        material={materials.Chair_mtl_ai}
        position={[-7.786, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0006.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.658, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0007.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.638, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0008.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.313, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0009.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.441, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0010.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.508, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0011.geometry}
        material={materials.Chair_mtl_ai}
        position={[-8.445, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0012.geometry}
        material={materials.Chair_mtl_ai}
        position={[-10.275, -0.411, -13.791]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0013.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.487, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0014.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.062, -0.411, 5.334]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0015.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.111, -0.411, 9.122]}
        rotation={[0, 0.536, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0016.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.106, -0.411, 7.292]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0017.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.924, -0.411, 8.292]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0018.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.967, -0.411, 10.224]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15_Chair_mtl_ai_0019.geometry}
        material={materials.Chair_mtl_ai}
        position={[11.009, -0.411, 12.096]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.083, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0001.geometry}
        material={materials.Chair_mtl_ai}
        position={[-16.104, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0002.geometry}
        material={materials.Chair_mtl_ai}
        position={[-14.232, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0003.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.254, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0004.geometry}
        material={materials.Chair_mtl_ai}
        position={[-4.808, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0005.geometry}
        material={materials.Chair_mtl_ai}
        position={[-7.786, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0006.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.658, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0007.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.638, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0008.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.313, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0009.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.441, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0010.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.508, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0011.geometry}
        material={materials.Chair_mtl_ai}
        position={[-8.445, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0012.geometry}
        material={materials.Chair_mtl_ai}
        position={[-10.275, -0.411, -13.791]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0013.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.487, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0014.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.062, -0.411, 5.334]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0015.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.111, -0.411, 9.122]}
        rotation={[0, 0.536, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0016.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.106, -0.411, 7.292]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0017.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.924, -0.411, 8.292]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0018.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.967, -0.411, 10.224]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13_Chair_mtl_ai_0019.geometry}
        material={materials.Chair_mtl_ai}
        position={[11.009, -0.411, 12.096]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.083, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0001.geometry}
        material={materials.Chair_mtl_ai}
        position={[-16.104, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0002.geometry}
        material={materials.Chair_mtl_ai}
        position={[-14.232, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0003.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.254, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0004.geometry}
        material={materials.Chair_mtl_ai}
        position={[-4.808, -0.411, -3.126]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0005.geometry}
        material={materials.Chair_mtl_ai}
        position={[-7.786, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0006.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.658, -0.411, -0.332]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0007.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.638, -0.411, -3.162]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0008.geometry}
        material={materials.Chair_mtl_ai}
        position={[-13.313, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0009.geometry}
        material={materials.Chair_mtl_ai}
        position={[-11.441, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0010.geometry}
        material={materials.Chair_mtl_ai}
        position={[-9.508, -0.411, -10.961]}
        rotation={[-Math.PI, 1.041, -Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0011.geometry}
        material={materials.Chair_mtl_ai}
        position={[-8.445, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0012.geometry}
        material={materials.Chair_mtl_ai}
        position={[-10.275, -0.411, -13.791]}
        rotation={[0, -1.057, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0013.geometry}
        material={materials.Chair_mtl_ai}
        position={[-6.487, -0.411, -13.756]}
        rotation={[0, -1.058, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0014.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.062, -0.411, 5.334]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0015.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.111, -0.411, 9.122]}
        rotation={[0, 0.536, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0016.geometry}
        material={materials.Chair_mtl_ai}
        position={[8.106, -0.411, 7.292]}
        rotation={[0, 0.535, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0017.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.924, -0.411, 8.292]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0018.geometry}
        material={materials.Chair_mtl_ai}
        position={[10.967, -0.411, 10.224]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14_Chair_mtl_ai_0019.geometry}
        material={materials.Chair_mtl_ai}
        position={[11.009, -0.411, 12.096]}
        rotation={[Math.PI, -0.552, Math.PI]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.defaultMat}
        position={[6.205, 2.319, -8.843]}
        scale={[1, 0.667, 1.195]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.defaultMat}
        position={[6.275, 2.33, -6.799]}
        scale={[1, 0.667, 1.195]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.PaletteMaterial001}
        position={[-2.103, 8.105, -17.933]}
        scale={[18.164, 8.543, 0.271]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.PaletteMaterial001}
        position={[-20.285, 8.105, -0.03]}
        rotation={[0, 1.571, 0]}
        scale={[18.164, 8.543, 0.271]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.PaletteMaterial001}
        position={[-14.503, 6.284, -17.558]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-1.668, -0.113, -2.262]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.PaletteMaterial001}
        position={[-9.741, 6.284, -17.558]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-1.668, -0.113, -2.262]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.PaletteMaterial001}
        position={[-5.042, 6.284, -17.558]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-1.668, -0.113, -2.262]}
      />
    </group>
  )
}

useGLTF.preload('/models/Restaurant2.glb')