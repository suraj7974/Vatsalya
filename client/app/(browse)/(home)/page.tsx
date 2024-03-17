import Image from 'next/image'
import React from 'react'
import { DailyGoals } from './_components/daily-goals';
import { Appointment } from './_components/appointment';

const Home = () => {
  return (
    <>
      <div className='h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center gap-y-20'>
        <Image src="/home-bg.svg" className='h-[calc(100vh-3.5rem)] absolute right-0 top-14 -z-10 w-auto' width={100} height={100} alt='Bg' />
        <h1 className='font-southmore text-9xl mt-20'>Vatsalya</h1>
        <p className='text-2xl w-1/3 text-center'>"Empowering pregnancy journeys through advanced technology. Vatsalya offers comprehensive support for monitoring mothers and babies' health."</p>
      </div>
      <DailyGoals />
      <Appointment />
    </>
  );
};

export default Home;