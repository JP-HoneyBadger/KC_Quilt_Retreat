/** @format */

'use client';

import Link from 'next/link';


import {
	RiYoutubeFill,
	RiLinkedinFill,
	RiGithubFill,
	RiFacebookFill,
	RiInstagramFill,
	RiFacebookCircleFill,
} from 'react-icons/ri';

const icons = [
	// {
	// 	path: '/',
	// 	name: <RiYoutubeFill />,
	// },
	// {
	// 	path: '/',
	// 	name: <RiLinkedinFill />,
	// },
	// {
	// 	path: '/',
	// 	name: <RiGithubFill />,
	// },
	{
		path: 'https://www.facebook.com/kcquiltretreat',
		name: < RiFacebookCircleFill/>,
	},
	// {
	// 	path: '/',
	// 	name: <RiInstagramFill />,
	// },
];

const Socials = ({containerStyles, iconsStyles}) => {
	return (<div className={`${containerStyles}`}>
        {icons.map((icon, index)=>{
            return <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
        })}




    </div>);
};

export default Socials;
