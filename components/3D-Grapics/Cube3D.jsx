/** @format */

'use client';

import { useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import styles from '@/styles/style.module.scss';
import { useRef} from 'react';

export default function Cube3D() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});
	const progress = useTransform(scrollYProgress, [0, 1], [0, 2]);
	const smoothProgress = useSpring(progress, { damping: 20 });

	return (
		<div className='flex flex-1 justify-center items-center'>
			<div className={styles.main}>
				<div className={styles.cube}>
                    <Canvas>
                        <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        />
                        <ambientLight intensity={1.5}/>
                        <directionalLight 
                        position={[2, 1, 1]}
                        castShadow={true}/>
                        <Cube progress={smoothProgress}/>
                        

                    </Canvas>
                </div>
			</div>
		</div>
	);
}

function Cube({progress}) {
    const mesh = useRef(null)
    const texture_1 = useLoader(TextureLoader, '/images/Quilt Rooms/20230901_104428.jpeg');
	const texture_2 = useLoader(TextureLoader, '/images/Quilt Rooms/20230901_104318.jpeg');
	const texture_3 = useLoader(TextureLoader, '/images/Quilt Rooms/20230901_104456.jpeg');
	const texture_4 = useLoader(TextureLoader, '/images/Kitchen/20230901_104401.jpeg');
	const texture_5 = useLoader(TextureLoader, '/images/Projects/IMG_5760.jpeg');
	const texture_6 = useLoader(TextureLoader, '/images/Projects/IMG_5763.jpeg');

    return (
        <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
			<meshPhongMaterial map={texture_1} attach='material-0' />
			<meshPhongMaterial map={texture_2} attach='material-1' />
			<meshPhongMaterial map={texture_3} attach='material-2' />
			<meshPhongMaterial map={texture_4} attach='material-3' />
			<meshPhongMaterial map={texture_5} attach='material-4' />
			<meshPhongMaterial map={texture_6} attach='material-5' />
        </motion.mesh>

    )
}

