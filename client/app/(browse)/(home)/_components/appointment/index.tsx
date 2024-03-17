import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Appointment = () => {
    return (
        <div className='w-2/3 mx-auto flex flex-col justify-center items-center gap-y-10'>
            <h1 className='text-4xl '>Appointment Remainder</h1>
            <div className='max-h-[400px] w-full text-sm rounded-lg flex p-3 shadow-[0_2px_12px_4px] shadow-slate-300'>
                <Image className='w-fit max-h-[400px] rounded-lg object-contain' src="/appointed-doctor.png" alt='doctor' width={400} height={400} />
                <aside className='w-1/2 flex flex-col justify-center items-center gap-y-2'>
                    <h3 className='text-2xl font-bold'>Dr. Sandeep Pandey</h3>
                    <div className='flex text-yellow-500 gap-x-2'>
                        <Star className='fill-yellow-500'/>
                        <Star className='fill-yellow-500'/>
                        <Star className='fill-yellow-500'/>
                        <Star className='fill-yellow-500'/>
                        <Star className='fill-yellow-500'/>
                    </div>
                    <p>Gynacologist</p>
                    <p>Ram Krishnacar Hospital, Raipur</p>
                    <p>We aim to be the go-to destination for clients seeking reliable, efficient, and transformative tech services</p>
                    <Button className='mt-2'>Consult Now</Button>
                </aside>
            </div>
        </div>
    )
}
