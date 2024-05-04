import styles from './foodSteam.module.css';
import foodbowl from '../../../../public/image/foodbowl.png'
import { motion } from 'framer-motion'

const FoodSteam = (section) => {
    return (
        <motion.div 
          className={styles.coffeeBlock}>
            <div className='w-full h-full pb-20' >
                <div className='pb-10'>
                <div className={styles.vapour}>
                    <span style={{ '--v': 1 }}></span>
                    <span style={{ '--v': 2 }}></span>
                    <span style={{ '--v': 5 }}></span>
                    <span style={{ '--v': 4 }}></span>
                    <span style={{ '--v': 6 }}></span>
                    <span style={{ '--v': 19 }}></span>
                    <span style={{ '--v': 7 }}></span>
                    <span style={{ '--v': 8 }}></span>
                    <span style={{ '--v': 9 }}></span>
                    <span style={{ '--v': 10 }}></span>
                    <span style={{ '--v': 11 }}></span>
                    <span style={{ '--v': 18 }}></span>
                </div>
                </div>
            </div>
            <div style={{ backgroundColor: "", margin: '-600px' }}>
                {/* <img className='w-full' src={foodbowl.src} /> */}
            </div>
        </motion.div>
    );
}

export default FoodSteam;
