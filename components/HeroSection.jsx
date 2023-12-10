import React from 'react'
import Logo from './Logo'
import PageBreak from './PageBreak'

export default function HeroSection() {
  return (<>
    <section className='flex justify-center items-center text-center w-full flex-col mt-4'>
      <p className='max-w-2xl py-4 mx-4 text-lg text-center leading-normal text-gray-800 lg:text-xl xl:text-xl dark:text-gray-300'>Located just north of Kansas City, in the charming town of Smithville, Missouri, come visit us and enjoy the KC Quilt Retreat. Experience our quilting and crafting area, the superb place to relax and unwind. The perfect weekend getaway from the everyday grind. </p>
    </section>
  <PageBreak />
    </>
  )
}
