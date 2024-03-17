import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-[calc(100vh-3.5rem)] flex justify-center'>
      <Image src="/home-bg.svg" className='h-[calc(100vh-3.5rem)] w-auto absolute right-0' width={100} height={100} alt='Bg' />
      <h1 className='font-southmore text-8xl mt-20'>Vatsalya</h1>
    </div>
  );
};

export default Home