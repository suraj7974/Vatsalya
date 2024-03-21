import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import { Button } from '@/components/ui/button'
import { DailyGoals } from "./_components/daily-goals";
import { Appointment } from "./_components/appointment";

const Home = () => {
  return (
    <>
      <div className="h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center gap-y-20">
        <Image
          src="/home-bg.svg"
          className="h-[calc(100vh-3.5rem)] absolute right-0 top-14 -z-10 w-auto"
          width={100}
          height={100}
          alt="Bg"
        />
        <h1 className="font-southmore text-9xl mt-20">Vatsalya</h1>
        <p className="text-2xl w-1/3 text-center">
          "Empowering pregnancy journeys through advanced technology. Vatsalya
          offers comprehensive support for monitoring mothers and babies'
          health."
        </p>
      </div>
      <DailyGoals />
      <Appointment />
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-4xl">Featured Doctors</h1>
        <div className="h-[550px] w-[500px] text-sm p-3 shadow-[0_2px_12px_4px] shadow-slate-300 ">
          <div className=" flex flex-col items-center gap-y-1">
            <img
              className="object-contain h-[358px] w-[788px]"
              src="/featured1.jpg"
              alt=""
            />
            <h2 className="text-xl font-bold">Dr.Lalit Nihal</h2>
            <div className="flex text-yellow-400 gap-x-2">
              <Star className="fill-yellow-500" />
              <Star className="fill-yellow-500" />
              <Star className="fill-yellow-500" />
              <Star className="fill-yellow-500" />
              <Star className="fill-yellow-500" />
            </div>
            <h2>Gynacologist</h2>
            <h2>Ram Krishnacare Hospital, Raipur</h2>
            <Button className="mt-2">Book Apointment</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
