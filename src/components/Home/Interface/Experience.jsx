import { motion } from 'framer-motion-3d'
import { useMediaQuery } from 'react-responsive';
import { Iphone } from "../Models/phone"
import { IphoneForNotification } from "../Models/phoneForNotification"
import { Card } from "../Models/Card";
import { CardHolder } from "../Models/CardHolder";
import { Model } from "../Models/Customer";
import { Staff } from "../Models/Staff";
import { Restaurant } from '../Models/Restaurant';
import { BgText } from '../Models/bgtext';
import { Heading } from '../Models/LandingHeding';
import { OrbitControls } from '@react-three/drei';


export const Experience = (props) => {
    const sm = useMediaQuery({ maxWidth: 768 });
    const { section, onSectionChange } = props;


    return (
        <>
            {/* <directionalLight intensity={0.5} position={[6, 5, 5]} />  */}
            <ambientLight intensity={1.5}  /> 

            <motion.group scale={[2, 2, 2]}
                transition={{ duration: section === 5 ? 3 : section === 7 ? 3 : section === 8 ? 10 : 1, }}
                animate={{
                    x: section === 1 ? 11 : section === 2 ? 11 : section === 3 ? 11 : section === 4 ? 11 : section === 5 ? 3 : section === 6 ? 8 : section === 7 ? 3 : section === 8 ? 3 : 20,
                    y: section === 1 ? -10 : section === 2 ? -10 : section === 3 ? -10 : section === 4 ? -10 : section === 5 ? -10 : section === 6 ? -9.6 : section === 7 ? -5 : section === 8 ? -5 : -10,
                    z: section === 1 ? 77.1 : section === 2 ? 77.1 : section === 3 ? 77.1 : section === 4 ? 77.1 : section === 5 ? 40 : section === 6 ? 64 : section === 7 ? 40 : section === 8 ? 30 : 50,
                    rotateX: section === 1 ? 0 : section === 2 ? 0 : section === 3 ? 0 : section === 4 ? 0 : section === 5 ? 0.6 : section === 6 ? 0.65 : section === 7 ? 0.1 : section === 8 ? 0.1 : 0,
                    rotateY: section === 1 ? 2 : section === 2 ? 2 : section === 3 ? 2 : section === 4 ? 2 : section === 5 ? 5.25 : section === 6 ? 5.55 : section === 7 ? 5.25 : section === 8 ? 5.25 : 1.9,
                    rotateZ: section === 1 ? 0 : section === 2 ? 0 : section === 3 ? 0 : section === 4 ? 0 : section === 5 ? 0. : section === 6 ? 0 : section === 7 ? 0 : section === 8 ? 0 : 0,
                }}>
                    
                <motion.group
                    animate={{ x: section === 5 ? 7 : 0, y: section === 5 ? 5 : 0, z: section === 5 ? 4 : 0 }} transition={{ delay: section === 5 ? 2 : 0, duration: section === 5 ? 7 : 1 }}>
                    {/* <ambientLight intensity={0.5} /> */}
                    <pointLight position={[11, 1, 1]} intensity={5} castShadow
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10} 
                        />
                        <ambientLight intensity={0.3} /> 
            <pointLight position={[1, 1, 1]} intensity={1.5} />
        <spotLight  intensity={18} castShadow />
            <spotLight position={[5, 15, 5]} angle={0.2} penumbra={1} intensity={0.6} castShadow />
            {/* <OrbitControls/> */}


                    <motion.group
                        className="hidden sm:block"
                        animate={{
                            y: section === 0 ? (sm ? 4.5 : 5.5) : section === 7 ? (sm ? 6 : 4) : section === 8 ? (sm ? 13 : 9) : (sm ? 13 : 1),
                            x: section === 0 ? (sm ? 1 : 4) : section === 7 ? (sm ? 2 : -2) : section === 8 ? (sm ? 2 : -2) : (sm ? 2 : 3),
                            z: section === 0 ? (sm ? -5 : -3) : section === 7 ? (sm ? -5.2 : -3.2) : section === 8 ? (sm ? -5.2 : -3.2) : (sm ? -3 : -3),
                            rotateX: section === 0 ? (-1.7) : section === 7 ? (-4.7) : section === 8 ? (-4.7) : (-1.7),
                            rotateY: section === 0 ? (-0.2) : section === 7 ? (0.5) : section === 8 ? (0.5) : (-0.2),
                            rotateZ: section === 0 ? (0.1) : section === 7 ? (0.1) : section === 8 ? (0.1) : (0.1),
                        }}>
                        {/* <Card  /> */}
                    </motion.group>

                    <motion.group
                        animate={{
                            y: section === 0 ? (sm ? 3.4 : 3.4) : section === 7 ? (sm ? 4.8 : 4.8) : section === 8 ? (sm ? 8.8 : 8.8) : (sm ? -2 : -2),
                            x: section === 0 ? (sm ? 2 : 5) : section === 7 ? (sm ? -3 : -3) : section === 8 ? (sm ? -3 : -3) : (sm ? 3 : 3),
                            z: section === 0 ? (sm ? -6 : -3) : section === 7 ? (sm ? -3 : -2.9) : section === 8 ? (sm ? -2.9 : -2.9) : (sm ? 0 : 0),
                            rotateX: section === 0 ? (sm ? 1.2 : 1.4) : section === 7 ? (sm ? -1.8 : -1.6) : section === 8 ? (sm ? -1.8 : -1.6) : (sm ? 0.6 : 0.8),
                            rotateY: section === 0 ? (sm ? -0.2 : -0.1) : section === 7 ? (sm ? 0.1 : 0.2) : section === 8 ? (sm ? 0.1 : 0.2) : (sm ? -0.2 : -0.1),
                            rotateZ: section === 0 ? (sm ? 0.1 : 0.2) : section === 7 ? (sm ? -0.2 : 0) : section === 8 ? (sm ? -0.2 : 0) : (sm ? 0.1 : 0.2),
                        }}>
                        {/* <Card scale={[1, 1, 1]} /> */}
                    </motion.group>

                    <motion.group></motion.group>
                    <motion.group position={[0, 0, 0]} scale={[3.5, 3.5, 3.5]} animate={{ x: -6.55, y: 1.68, z: -0.9 }}>
                        <motion.group animate={{ rotateX: 1.59, rotateZ: 3 }}>
                            <IphoneForNotification section={section} />
                        </motion.group >
                    </motion.group >
                    <motion.group scale={[3, 3, 3]}
                        transition={{ duration: section === 6 ? 6 : section === 7 ? 1.5 : 1, }}
                        animate={{ x: -6.1, y: -0.6, z: 0.5, rotateX: -1.5, rotateZ: 3.2 }}>
                        <Staff animation={section === 1 ? 'Sitting' : 'Sitting'} />
                    </motion.group>
                    <motion.group scale={[3, 3, 3]}
                        transition={{ duration: section === 6 ? 6 : section === 7 ? 1.5 : 1, }}
                        animate={{ x: -3.39, y: -0.3, z: -1.8, rotateX: -1.5, rotateZ: -1.2 }}>
                        <Model animation={section === 5 ? 'Standing' : section === 6 ? 'Billing' : 'Billing'} />
                    </motion.group>
                    <motion.group scale={[25, 19, 20]}
                        animate={{
                            x: section === 1 ? 1 : section === 2 ? 1 : section === 3 ? 1 : section === 4 ? 1 : section === 5 ? 1 : section === 6 ? 1 : section === 7 ? 1 : section === 8 ? 1 : 1,
                            y: section === 1 ? 0 : section === 2 ? 1 : section === 3 ? 2 : section === 4 ? 5 : section === 5 ? 15 : section === 6 ? 24 : section === 7 ? 5 : section === 8 ? 15 : -15,
                            z: section === 1 ? -10 : section === 2 ? -10 : section === 3 ? -10 : section === 7 ? -10 : -10,
                        }}>
                    </motion.group>
                    <BgText />
                    <motion.group castShadow>
                        <Restaurant />
                    </motion.group>
                    <motion.group scale={[0.15, 0.15, 0.15]}
                        animate={{ x: -6, y: 1.69, z: -0.6, rotateX: -1.59, rotateY: -0, rotateZ: 0 }}
                    >
                        <CardHolder section={section} setSetion={onSectionChange} />
                    </motion.group>

                    <motion.group scale={[ (sm ? 12 : 25),(sm ? 14 : 25),(sm ? 14 : 25), ]}  animate={{ z: section === 0 ? (sm ? -2 : -8) : -25 ,x: (sm ? 25 : 22), y: (sm ? 4 : 3) ,rotateY:-1.7 }} >
                        <Heading />
                    </motion.group>
                </motion.group>
            </motion.group>
            <motion.group position={[0, 0, 0]} scale={[200, 200, 200]} rotation={[2.6, -0.4, 3]}
                animate={{
                    x: section === 1 ? (sm ? 1 : 27) : section === 2 ? (sm ? 1 : -20) : section === 3 ? (sm ? 1 : 27) : section === 4 ? (sm ? 1 : -27) : section === 5 ? (sm ? 0 : -3) : section === 6 ? 15 : section === 7 ? 15 : section === 8 ? 3 : 3,
                    y: section === 1 ? (sm ? -25 : -15) : section === 2 ? (sm ? -25 : -15) : section === 3 ? (sm ? -25 : -15) : section === 4 ? (sm ? -25 : -15) : section === 5 ? 50 : section === 6 ? 50 : section === 7 ? 50 : section === 8 ? 50 : 50,
                    z: section === 0 ? 0 : section === 5 ? (sm ? 3 : 3) : section === 6 ? 0 : section === 7 ? 3 : section === 8 ? 4 : -2,
                    rotateY: section === 1 ? 0.4 : section === 2 ? -0.4 : section === 3 ? 0.4 : section === 4 ? -0.4 : section === 5 ? 0 : section === 6 ? 0 : section === 7 ? 0 : section === 8 ? 0 : 0,
                    rotateX: section === 1 ? 3 : section === 2 ? 3 : section === 3 ? 3 : section === 4 ? 3 : section === 5 ? 2.6 : section === 6 ? 2.6 : section === 7 ? 2.6 : section === 8 ? 2.6 : 0,
                    rotateZ: section === 1 ? 3.2 : section === 2 ? 3 : section === 3 ? 3.2 : section === 4 ? 3 : section === 5 ? 1.5 : section === 6 ? 1.5 : section === 7 ? 1.5 : section === 8 ? 1.5 : 0,
                }}
                castShadow>
                <Iphone section={section} />
            </motion.group >



        </>
    )
}




