import React from 'react'
import { Item } from '../../components/Item'
import { SkeletonItem } from '../../components/SkeletonItem'
import img1 from './../../i/1.webp'
import img10 from './../../i/10.webp'
import img11 from './../../i/11.png'
import img12 from './../../i/12.png'
import img13 from './../../i/13.png'
import img14 from './../../i/14.png'
import img15 from './../../i/15.png'
import img16 from './../../i/16.png'
import img17 from './../../i/17.png'
import img18 from './../../i/18.png'
import img19 from './../../i/19.png'
import img2 from './../../i/2.webp'
import img20 from './../../i/20.png'
import img21 from './../../i/21.png'
import img22 from './../../i/22.png'
import img23 from './../../i/23.png'
import img24 from './../../i/24.png'
import img25 from './../../i/25.png'
import img26 from './../../i/26.png'
import img27 from './../../i/27.png'
import img28 from './../../i/28.png'
import img29 from './../../i/29.png'
import img3 from './../../i/3.webp'
import img30 from './../../i/30.png'
import img31 from './../../i/31.png'
import img32 from './../../i/32.png'
import img33 from './../../i/33.png'
import img34 from './../../i/34.png'
import img35 from './../../i/35.png'
import img36 from './../../i/36.png'
import img37 from './../../i/37.png'
import img38 from './../../i/38.png'
import img39 from './../../i/39.png'
import img4 from './../../i/4.webp'
import img40 from './../../i/40.png'
import img41 from './../../i/41.png'
import img42 from './../../i/42.png'
import img43 from './../../i/43.png'
import img44 from './../../i/44.png'
import img45 from './../../i/45.png'
import img46 from './../../i/46.png'
import img47 from './../../i/47.png'
import img48 from './../../i/48.png'
import img49 from './../../i/49.png'
import img5 from './../../i/5.webp'
import img50 from './../../i/50.png'
import img6 from './../../i/6.png'
import img7 from './../../i/7.webp'
import img8 from './../../i/8.webp'
import img9 from './../../i/9.webp'
import styles from './MarketPageItems.module.css'

export const MarketPageItems = () => {
	let data = [
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 2,
			item: 'AK-47',
			skin: 'Asiimov',
			img: img2,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 38.24,
			float: 0.1743020377,
			statTrak: false,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['red', 'white'],
		},
		{
			id: 3,
			item: 'AK-47',
			skin: 'Neon Rider',
			img: img3,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 34.91,
			float: 0.1603592584,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['purple'],
		},
		{
			id: 4,
			item: 'M4A4',
			skin: 'The Emperor',
			img: img4,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 31.04,
			float: 0.2763474522,
			statTrak: false,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['blue'],
		},
		{
			id: 5,
			item: 'AK-47',
			skin: 'Neon Revolution',
			img: img5,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 23.98,
			float: 0.1639582362,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['purple'],
		},
		{
			id: 6,
			item: 'AK-47',
			skin: 'Vulcan',
			img: img6,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 48.02,
			float: 0.1808396582,
			statTrak: false,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['white', 'blue'],
		},
		{
			id: 7,
			item: 'M4A4',
			skin: 'Neo-Noir',
			img: img7,
			exterior: 'Field-Tested',
			rarity: '',
			price: 22.72,
			float: 0.2035,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['purple'],
		},
		{
			id: 8,
			item: 'AWP',
			skin: 'Neo-Noir',
			img: img8,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 29.98,
			float: 0.210559861,
			statTrak: false,
			souvenir: false,
			type: 'Sniper Rifles',
			color: ['purple'],
		},
		{
			id: 9,
			item: 'AK-47',
			skin: 'Bloodsport',
			img: img9,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 47.11,
			float: 0.3011799867,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['red'],
		},
		{
			id: 10,
			item: 'AWP',
			skin: 'Asiimov',
			img: img10,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 61.7,
			float: 0.201843237,
			statTrak: false,
			souvenir: false,
			type: 'Sniper Rifles',
			color: ['white', 'red'],
		},
		{
			id: 11,
			item: 'AWP',
			skin: 'Redline',
			img: img11,
			exterior: 'Minimal Wear',
			rarity: 'Classified',
			price: 102.83,
			float: 0.1463899761,
			statTrak: false,
			souvenir: false,
			type: 'Sniper Rifles',
			color: ['black', 'red'],
		},
		{
			id: 12,
			item: 'AUG',
			skin: 'Chameleon',
			img: img12,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 4.1,
			float: 0.2334761024,
			statTrak: false,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['green'],
		},
		{
			id: 13,
			item: 'M4A4',
			skin: 'Tooth Fairy',
			img: img13,
			exterior: 'Field-Tested',
			rarity: 'Classified',
			price: 4.29,
			float: 0.2911839783,
			statTrak: false,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['red'],
		},
		{
			id: 14,
			item: 'P250',
			skin: 'See Ya Later',
			img: img14,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 5.04,
			float: 0.3130635619,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['green'],
		},
		{
			id: 15,
			item: 'AWP',
			skin: 'Mortis',
			img: img15,
			exterior: 'Field-Tested',
			rarity: 'Classified',
			price: 2.0,
			float: 0.2922761738,
			statTrak: false,
			souvenir: false,
			type: 'Sniper Rifles',
			color: ['brown'],
		},
		{
			id: 16,
			item: 'Desert Eagle',
			skin: 'Mecha Industries',
			img: img16,
			exterior: 'Field-Tested',
			rarity: 'Classified',
			price: 5.0,
			float: 0.2522573769,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['white', 'black'],
		},
		{
			id: 17,
			item: 'AK-47',
			skin: 'Phantom Disruptor',
			img: img17,
			exterior: 'Field-Tested',
			rarity: 'Classified',
			price: 8.08,
			float: 0.261677891,
			statTrak: false,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['brown'],
		},
		{
			id: 18,
			item: 'MP7',
			skin: 'Bloodsport',
			img: img18,
			exterior: 'Well-Worn',
			rarity: 'Covert',
			price: 6.78,
			float: 0.3993258774,
			statTrak: true,
			souvenir: false,
			type: 'SMGs',
			color: ['red'],
		},
		{
			id: 19,
			item: 'Nova',
			skin: 'Tempest',
			img: img19,
			exterior: 'Minimal Wear',
			rarity: '',
			price: 7.2,
			float: 0.130599767,
			statTrak: true,
			souvenir: false,
			type: 'Shotguns',
			color: ['blue'],
		},
		{
			id: 20,
			item: 'P250',
			skin: 'Sand Dune',
			img: img20,
			exterior: 'Battle-Scarred',
			rarity: 'Mil-Spec Grade',
			price: 0.03,
			float: 0.706610918,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['brown'],
		},
		{
			id: 21,
			item: 'R8 Revolver',
			skin: 'Night',
			img: img21,
			exterior: 'Field-Tested',
			rarity: 'Consumer Grade',
			price: 0.04,
			float: 0.3610422313,
			statTrak: true,
			souvenir: true,
			type: 'Pistols',
			color: ['blue'],
		},
		{
			id: 22,
			item: 'Desert Eagle',
			skin: 'Corinthian',
			img: img22,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 1.0,
			float: 0.1815797389,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['brown'],
		},
		{
			id: 23,
			item: 'Desert Eagle',
			skin: 'Cobalt Disruption',
			img: img23,
			exterior: 'Minimal Wear',
			rarity: 'Classified',
			price: 110.36,
			float: 0.0718830079,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['blue'],
		},
		{
			id: 24,
			item: 'USP-S',
			skin: 'Neo-Noir',
			img: img24,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 23.62,
			float: 0.2602108419,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['purple'],
		},
		{
			id: 25,
			item: 'AK-47',
			skin: 'Ice Coaled',
			img: img25,
			exterior: 'Field-Tested',
			rarity: 'Classified',
			price: 18.31,
			float: 0.3448694348,
			statTrak: false,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['green', 'blue', 'black'],
		},
		{
			id: 26,
			item: 'Gut Knife',
			skin: 'Slaughter',
			img: img26,
			exterior: 'Minimal Wear',
			rarity: 'Covert',
			price: 247.13,
			float: 0.0889184102,
			statTrak: false,
			souvenir: false,
			type: 'Knives',
			color: ['red'],
		},
		{
			id: 27,
			item: 'Bayonet',
			skin: 'Crimson Web',
			img: img27,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 400.0,
			float: 0.3709094226,
			statTrak: false,
			souvenir: false,
			type: 'Knives',
			color: ['red'],
		},
		{
			id: 28,
			item: 'Bowie Knife',
			skin: 'Tiger Tooth',
			img: img28,
			exterior: 'Factory New',
			rarity: 'Covert',
			price: 426.4,
			float: 0.0667750239,
			statTrak: false,
			souvenir: false,
			type: 'Knives',
			color: ['yellow'],
		},
		{
			id: 29,
			item: 'Glock-18',
			skin: 'Bunsen Burner',
			img: img29,
			exterior: 'Minimal Wear',
			rarity: 'Mil-Spec Grade',
			price: 1.5,
			float: 0.1449106336,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['blue'],
		},
		{
			id: 30,
			item: 'SSG 08',
			skin: 'Prey',
			img: img30,
			exterior: 'Factory New',
			rarity: 'Consumer',
			price: 0.07,
			float: 0.0605865233,
			statTrak: false,
			souvenir: true,
			type: 'Sniper Rifles',
			color: ['black'],
		},
		{
			id: 31,
			item: 'CZ75-Auto',
			skin: 'Eco',
			img: img31,
			exterior: 'Field-Tested',
			rarity: 'Restricted',
			price: 1.59,
			float: 0.3238614798,
			statTrak: true,
			souvenir: false,
			type: 'Pistols',
			color: ['green'],
		},
		{
			id: 32,
			item: 'Desert Eagle',
			skin: 'Light Rail',
			img: img32,
			exterior: 'Minimal Wear',
			rarity: 'Restricted',
			price: 2.08,
			float: 0.1160299182,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['gradient'],
		},
		{
			id: 33,
			item: 'USP-S',
			skin: 'Cyrex',
			img: img33,
			exterior: 'Well-Worn',
			rarity: 'Restricted',
			price: 2.38,
			float: 0.3959170282,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['red', 'black'],
		},
		{
			id: 34,
			item: 'Dual Berettas',
			skin: 'Twin Turbo',
			img: img34,
			exterior: 'Battle-Scarred',
			rarity: 'Classified',
			price: 3.07,
			float: 0.8918077946,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['red', 'green'],
		},
		{
			id: 35,
			item: 'P250',
			skin: 'X-Ray',
			img: img35,
			exterior: 'Factory New',
			rarity: 'Restricted',
			price: 0.91,
			float: 0.0693159252,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['green'],
		},
		{
			id: 36,
			item: 'USP-S',
			skin: 'Cortex',
			img: img36,
			exterior: 'Well-Worn',
			rarity: 'Classified',
			price: 5.21,
			float: 0.4008360505,
			statTrak: true,
			souvenir: false,
			type: 'Pistols',
			color: ['purple'],
		},
		{
			id: 37,
			item: 'SG 553',
			skin: 'Pulse',
			img: img37,
			exterior: 'Minimal Wear',
			rarity: 'Restricted',
			price: 3.74,
			float: 0.1256971657,
			statTrak: false,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['purple'],
		},
		{
			id: 38,
			item: 'AK-47',
			skin: 'Slate',
			img: img38,
			exterior: 'Factory New',
			rarity: 'Restricted',
			price: 45.7,
			float: 0.0690777898,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 39,
			item: 'AWP',
			skin: 'BOOM',
			img: img39,
			exterior: 'Field-Tested',
			rarity: 'Classified',
			price: 1176.99,
			float: 0.2492644638,
			statTrak: true,
			souvenir: false,
			type: 'Sniper Rifles',
			color: ['red'],
		},

		{
			id: 40,
			item: 'M9 Bayonet',
			skin: 'Slaughter',
			img: img40,
			exterior: 'Factory New',
			rarity: 'Covert',
			price: 1387.96,
			float: 0.0610203221,
			statTrak: false,
			souvenir: false,
			type: 'Knives',
			color: ['red'],
		},
		{
			id: 41,
			item: 'Karambit',
			skin: 'Marble Fade',
			img: img41,
			exterior: 'Factory New',
			rarity: 'Covert',
			price: 2200.0,
			float: 0.0320178457,
			statTrak: false,
			souvenir: false,
			type: 'Knives',
			color: ['blue'],
		},
		{
			id: 42,
			item: 'Desert Eagle',
			skin: 'Printstream',
			img: img42,
			exterior: 'Battle-Scarred',
			rarity: 'Covert',
			price: 44.86,
			float: 0.6531020999,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['white'],
		},
		{
			id: 43,
			item: 'USP-S',
			skin: 'Ticket to Hell',
			img: img43,
			exterior: 'Factory New',
			rarity: 'Restricted',
			price: 14.1,
			float: 0.0663902089,
			statTrak: true,
			souvenir: false,
			type: 'Pistols',
			color: ['white', 'black'],
		},

		{
			id: 44,
			item: 'Flip Knife',
			skin: 'Bright Water',
			img: img44,
			exterior: 'Minimal Wear',
			rarity: 'Covert',
			price: 326.32,
			float: 0.1425579041,
			statTrak: false,
			souvenir: false,
			type: 'Knives',
			color: ['blue'],
		},
		{
			id: 45,
			item: 'Glock-18',
			skin: 'Nuclear Garden',
			img: img45,
			exterior: 'Well-Worn',
			rarity: 'Restricted',
			price: 5.46,
			float: 0.4454805255,
			statTrak: false,
			souvenir: false,
			type: 'Pistols',
			color: ['green'],
		},
		{
			id: 46,
			item: 'AWP',
			skin: 'Hyper Beast',
			img: img46,
			exterior: 'Field-Tested',
			rarity: 'Covert',
			price: 49.0,
			float: 0.2371766567,
			statTrak: false,
			souvenir: false,
			type: 'Sniper Rifles',
			color: ['purple', 'blue'],
		},
		{
			id: 47,
			item: 'CZ75-Auto',
			skin: 'Tigris',
			img: img47,
			exterior: 'Minimal Wear',
			rarity: 'Restricted',
			price: 2.63,
			float: 0.1406785846,
			statTrak: true,
			souvenir: false,
			type: 'Pistols',
			color: ['black', 'red'],
		},

		{
			id: 48,
			item: 'Gut Knife',
			skin: 'Tiger Tooth',
			img: img48,
			exterior: 'Factory New',
			rarity: 'Covert',
			price: 277.59,
			float: 0.0318722539,
			statTrak: false,
			souvenir: false,
			type: 'Knives',
			color: ['yellow'],
		},
		{
			id: 49,
			item: 'Tec-9',
			skin: 'Isaac',
			img: img49,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 3.15,
			float: 0.3484551013,
			statTrak: true,
			souvenir: false,
			type: 'Pistols',
			color: ['black', 'red'],
		},
		{
			id: 50,
			item: 'Driver Gloves',
			skin: 'Overtake',
			img: img50,
			exterior: 'Battle-Scarred',
			rarity: 'Extraordinary',
			price: 106.61,
			float: 0.6102259755,
			statTrak: false,
			souvenir: false,
			type: 'Gloves',
			color: ['black', 'yellow'],
		},
	]

	return (
		<div className={styles['main-container']}>
			<div className={styles.conitaner}>
				{(data ? data : [...Array(20)]).map((item, i) => {
					return data ? <Item key={i} data={item} /> : <SkeletonItem key={i} />
				})}
			</div>
		</div>
	)
}
