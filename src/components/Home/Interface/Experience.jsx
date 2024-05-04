
import { Iphone } from "../Models/phone"
import { Card } from "../Models/Card";
import { Model } from "../Models/PlateUpModel";
import { FoodSpace } from "../Models/foodWorld";
import { motion } from 'framer-motion-3d'
import { Ipad } from '../Models/Ipad';
import { BgText } from '../Models/bgtext';


export const Experience = (props) => {
    const { section } = props;
    console.log("Section:", section);

    return (
        <>
            <directionalLight intensity={0.001} position={[6, 5, 5]} />
            <ambientLight intensity={0.01} />
            <motion.group
                animate={{
                    y: section === 0 ? 5.5 : section === 7 ? 5 : section === 8 ? 9 : 10,
                    x: section === 0 ? 4 : section === 7 ? -2 : section === 8 ? -2 : 3,
                    z: section === 0 ? -3 : section === 7 ? -3.2 : section === 8 ? -3.2 : -3,
                    rotateX: section === 0 ? 1.4 : section === 7 ? -1.6 : section === 8 ? -1.6 : 0.8,
                    rotateY: section === 0 ? -0.1 : section === 7 ? 0.2 : section === 8 ? 0.2 : -0.1,
                    rotateZ: section === 0 ? 0.2 : section === 7 ? 0 : section === 8 ? 0 : .2,
                }}>
                <Card />
            </motion.group>
            <motion.group
                animate={{
                    y: section === 0 ? 3.4 : section === 7 ? 4.8 : section === 8 ? 8.8 : -2,
                    x: section === 0 ? 5 : section === 7 ? -3 : section === 8 ? -3 : 3,
                    z: section === 0 ? -3 : section === 7 ? -2.9 : section === 8 ? -2.9 : 0,
                    rotateX: section === 0 ? -1.7 : section === 7 ? -4.7 : section === 8 ? -4.7 : -1.7,
                    rotateY: section === 0 ? -0.2 : section === 7 ? 0.5 : section === 8 ? 0.5 : -0.2,
                    rotateZ: section === 0 ? 0.1 : section === 7 ? 0.1 : section === 8 ? 0.1 : 0.1,
                }}>
                <Card scale={[1, 1, 1]} />
            </motion.group>
            <motion.group position={[0, 0, 0]} scale={[30, 30, 30]} rotation={[2.6, -0.4, 3]}
                animate={{
                    z: section === 0 ? 0 : section === 5 ? 3 : section === 6 ? 0 : section === 7 ? 3 : section === 8 ? 4 : -2,
                    y: section === 1 ? 1.5 : section === 2 ? 1.5 : section === 3 ? 1.5 : section === 4 ? 1.5 : section === 5 ? 15 : section === 6 ? 15 : section === 7 ? -15 : section === 8 ? -15 : -15,
                    x: section === 1 ? 4 : section === 2 ? -3 : section === 3 ? 4 : section === 4 ? -3 : section === 5 ? -3 : section === 6 ? 15 : section === 7 ? 15 : section === 8 ? 3 : 3,
                    rotateY: section === 1 ? 0.4 : section === 2 ? -0.4 : section === 3 ? 0.4 : section === 4 ? -0.4 : section === 5 ? 0 : section === 6 ? 0 : section === 7 ? 0 : section === 8 ? 0 : 0,
                    rotateX: section === 1 ? 3 : section === 2 ? 3 : section === 3 ? 3 : section === 4 ? 3 : section === 5 ? 2.6 : section === 6 ? 2.6 : section === 7 ? 2.6 : section === 8 ? 2.6 : 0,
                    rotateZ: section === 1 ? 3.2 : section === 2 ? 3 : section === 3 ? 3.2 : section === 4 ? 3 : section === 5 ? 1.5 : section === 6 ? 1.5 : section === 7 ? 1.5 : section === 8 ? 1.5 : 0,
                }}>
                <Iphone section={section} />
            </motion.group >
            <motion.group scale={[3, 3, 3]}
                transition={{
                    duration: section === 6 ? 4 : section === 7 ? 1.5 : 1,
                }}

                animate={{
                    y: section === 5 ? -1.9 : section === 6 ? 0 : section === 7 ? -1 : section === 8 ? 4 : -15,
                    x: section === 5 ? -1.7 : section === 6 ? 0 : section === 7 ? 6 : section === 8 ? 6 : 3,
                    z: section === 5 ? -1 : section === 6 ? -5 : section === 7 ? 5 : section === 8 ? 5 : 3,
                    rotateX: section === 5 ? -1.5 : section === 6 ? -1.9 : section === 7 ? -1.5 : section === 8 ? -1.5 : 0,
                    rotateY: section === 5 ? 0 : section === 6 ? 0.5 : section === 7 ? 0 : section === 8 ? -0 : 0,
                    rotateZ: section === 5 ? 0.3 : section === 6 ? 7 : section === 7 ? -0.5 : section === 8 ? -0.5 : 0,
                }}>
                <Model animation={
                    section === 1 ? 'Standing' :
                        section === 2 ? 'Standing' :
                            section === 3 ? 'Standing' :
                                section === 4 ? 'Standing' :
                                    section === 5 ? 'Standing' :
                                        section === 6 ? 'Gravity' :

                                            'Gravity'
                } section={section} />

            </motion.group>
            <motion.group
                animate={{
                    x: section === 5 ? -0.7 : section === 6 ? 1 : section === 7 ? 1 : section === 8 ? 1 : 1,
                    y: section === 5 ? 3.5 : section === 6 ? 4.2 : section === 7 ? 4.2 : section === 8 ? 4.2 : -2.5,
                    z: section === 5 ? 2 : section === 6 ? 6.3 : section === 7 ? 6.3 : section === 8 ? 6.3 : 2,
                    rotateX: section === 5 ? 1.6 : 1.6,
                    rotateY: section === 5 ? 1.6 : 1.6,
                    rotateZ: section === 5 ? 0 : 0,
                }}>

                <Ipad scale={[0.3, 0.3, 0.3]}  rotation={[0,-0.03,0]}/>
            </motion.group >
            <motion.group rotation={[0, -1, 3]} animate={{
                x: section === 5 ? 10 : section === 6 ? 0 : section === 7 ? 0 : 9,
                y: section === 5 ? 0 : section === 6 ? 3 : section === 7 ? 3 : -105,
                z: section === 5 ? -30 : section === 6 ? -3 : section === 7 ? 20 : 120,

            }}
                transition={{
                    duration: section === 6 ? 2.5 : section === 7 ? 3 : 1,
                }}
                initial={{
                    x: section === 6 ? 0 : 1,
                    y: section === 6 ? 3 : -105,
                    z: section === 6 ? 120 : 120,
                }}>
                <FoodSpace scale={[1, 1, 1]} section={section} />   
            </motion.group>
            <motion.group scale={[25, 19, 20]}
                animate={{
                    x: section === 1 ? 1 : section === 2 ? 1 : section === 3 ? 1 : section === 4 ? 1 : section === 5 ? 1 : section === 6 ? 1 : section === 7 ? 1 : section === 8 ? 1 : 1,
                    y: section === 1 ? 0 : section === 2 ? 1 : section === 3 ? 2 : section === 4 ? 5 : section === 5 ? 15 : section === 6 ? 24 : section === 7 ? 5 : section === 8 ? 15 : -15,
                    z: section === 1 ? -10 : section === 2 ? -10 : section === 3 ? -10 : section === 7 ? -10 : -10,

                }}>


                <BgText />
            </motion.group>
        </>
    )
}



