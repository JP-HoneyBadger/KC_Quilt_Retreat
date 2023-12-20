/** @format */

import React from 'react';
import Logo2 from './Logo2';


export default function PageBreakSpinner() {
	return (<>
		<div className=' flex justify-center items-center'>
			<div className='border-b-2 w-full border-primary mx-4 md:mx-8'></div>
                
                <div className='inline-block  bg-white min-w-[60px] md:min-w-[100px] rounded-lg'>
                    <Logo2 className=''/>
                   
            </div> <div className='border-b-2 w-full border-primary mx-4 md:mx-8'></div>
		</div>
    </>
	);
}
