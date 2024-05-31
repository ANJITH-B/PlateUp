import { Iphone } from "../Models/phone"
import { Card } from "../Models/Card";
import { Model } from "../Models/Customer";
import { Staff } from "../Models/Staff";
import { motion } from 'framer-motion-3d'
import { Restaurant } from '../Models/Restaurant';
import { BgText } from '../Models/bgtext';
import { useMediaQuery } from 'react-responsive';
import { useMotionValue, useSpring } from 'framer-motion';


export const Experience = (props) => {
    const sm = useMediaQuery({ maxWidth: 768 });
    const { section } = props;


    return (
        <>
            <directionalLight intensity={0.001} position={[6, 5, 5]} />
            <ambientLight intensity={0.4} />
            <motion.group scale={[2, 2, 2]}
                animate={{
                    y: -7,
                    x: 0.1,
                    z: 45,
                }}>

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
                    <Card scale={[1, 1, 1]} />
                </motion.group>


                <motion.group position={[0, 0, 0]} scale={[30, 30, 30]} rotation={[2.6, -0.4, 3]}
                    animate={{
                        x: section === 1 ? (sm ? 1 : 4) : section === 2 ? (sm ? 1 : -3) : section === 3 ? (sm ? 1 : 4) : section === 4 ? (sm ? 1 : -3) : section === 5 ? (sm ? 0 : -3) : section === 6 ? 15 : section === 7 ? 15 : section === 8 ? 3 : 3,
                        y: section === 1 ? (sm ? 0 : 1.5) : section === 2 ? (sm ? 0 : 1.5) : section === 3 ? (sm ? 0 : 1.5) : section === 4 ? (sm ? 0 : 1.5) : section === 5 ? 15 : section === 6 ? 15 : section === 7 ? -15 : section === 8 ? -15 : -15,
                        z: section === 0 ? 0 : section === 5 ? (sm ? 3 : 3) : section === 6 ? 0 : section === 7 ? 3 : section === 8 ? 4 : -2,
                        rotateY: section === 1 ? 0.4 : section === 2 ? -0.4 : section === 3 ? 0.4 : section === 4 ? -0.4 : section === 5 ? 0 : section === 6 ? 0 : section === 7 ? 0 : section === 8 ? 0 : 0,
                        rotateX: section === 1 ? 3 : section === 2 ? 3 : section === 3 ? 3 : section === 4 ? 3 : section === 5 ? 2.6 : section === 6 ? 2.6 : section === 7 ? 2.6 : section === 8 ? 2.6 : 0,
                        rotateZ: section === 1 ? 3.2 : section === 2 ? 3 : section === 3 ? 3.2 : section === 4 ? 3 : section === 5 ? 1.5 : section === 6 ? 1.5 : section === 7 ? 1.5 : section === 8 ? 1.5 : 0,
                    }}>
                    <Iphone section={section} />
                </motion.group >

                <motion.group scale={[3, 3, 3]}
                    transition={{
                        duration: section === 6 ? 6 : section === 7 ? 1.5 : 1,
                    }}
                    animate={{ x: 0, y: 2, rotateX: -1}}
                   >
                    <Model animation={
                    section === 1 ? 'Standing' :
                        section === 2 ? 'Standing' :
                            section === 3 ? 'Standing' :
                                section === 4 ? 'Standing' :
                                    section === 5 ? 'Sitting ' :
                                        section === 6 ? 'Sitting' :

                                            'Sitting'
                } section={section} />
                    <Staff animation={section === 1 ? 'Standing' : 'Sitting'} />
                </motion.group>



                <motion.group scale={[25, 19, 20]}
                    animate={{
                        x: section === 1 ? 1 : section === 2 ? 1 : section === 3 ? 1 : section === 4 ? 1 : section === 5 ? 1 : section === 6 ? 1 : section === 7 ? 1 : section === 8 ? 1 : 1,
                        y: section === 1 ? 0 : section === 2 ? 1 : section === 3 ? 2 : section === 4 ? 5 : section === 5 ? 15 : section === 6 ? 24 : section === 7 ? 5 : section === 8 ? 15 : -15,
                        z: section === 1 ? -10 : section === 2 ? -10 : section === 3 ? -10 : section === 7 ? -10 : -10,
                    }}>
                    <BgText />
                </motion.group>
                <motion.group
                    animate={{
                        x: section === 1 ? 11 : section === 2 ? 11 : section === 3 ? 11 : section === 4 ? 11 : section === 5 ? 0 : section === 6 ? 0 : section === 7 ? 0 : section === 8 ? 0 : 10,
                        y: section === 1 ? -1 : section === 2 ? -1 : section === 3 ? -1 : section === 4 ? -1 : section === 5 ? 0 : section === 6 ? 0 : section === 7 ? 0 : section === 8 ? 0 : 0,
                        z: section === 1 ? 17 : section === 2 ? 17 : section === 3 ? 17 : section === 4 ? 17 : section === 5 ? 5 : section === 6 ? 0 : section === 7 ? 0 : section === 8 ? 0 : 7,
                        rotateX: section === 1 ? 0 : section === 2 ? 0 : section === 3 ? 0 : section === 4 ? 0 : section === 5 ? 0 : section === 6 ? 0 : section === 7 ? 0 : section === 8 ? 0 : 0,
                        rotateY: section === 1 ? 2.2 : section === 2 ? 2.2 : section === 3 ? 2.2 : section === 4 ? 2.2 : section === 5 ? 5.2 : section === 6 ? 0 : section === 7 ? 0 : section === 8 ? 0 : 1.8,
                        rotateZ: section === 1 ? 0 : section === 2 ? 0 : section === 3 ? 0 : section === 4 ? 0 : section === 5 ? 0 : section === 6 ? 0 : section === 7 ? 0 : section === 8 ? 0 : 0,
                    }} transition={{
                        duration: section === 5 ? 3 : section === 7 ? 3 : 1,
                    }}>
                    <Restaurant />
                </motion.group>
            </motion.group>


        </>
    )
}



