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



const icons =[
    {
		path: 'https://www.facebook.com/kcquiltretreat',
		name: < RiFacebookCircleFill/>,
	},
]

export default function Demographics() {
  return (
    <div>
      
    </div>
  )
}


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
