import { motion } from 'framer-motion'
import React from 'react'
import styles from './Knife.module.css'

export const Knife = ({ data }) => {
	const knifeAnimation = {
		hidden: {
			opacity: 0,
		},
		visible: (custom) => ({
			opacity: 1,
			transition: { delay: custom * 0.2 },
			rotateZ: 10,
		}),
	}

	const knifeTextAnimation = {
		hidden: {
			opacity: 0,
		},
		visible: (custom) => ({
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}>
			<motion.div
				custom={2}
				variants={knifeTextAnimation}
				className={styles[data.lineStyle]}>
				<motion.div
					custom={2}
					variants={knifeTextAnimation}
					className={styles.bullet}></motion.div>
				<motion.p
					custom={2}
					variants={knifeTextAnimation}
					className={styles[data.textStyle]}>
					{data.name}
				</motion.p>
			</motion.div>
			<motion.img
				custom={1}
				variants={knifeAnimation}
				src={data.img}
				alt={data.name}
				className={data.imgStyles}
				title={data.name}
				loading='eager'
			/>
		</motion.div>
	)
}
