import React from "react";
import Image from "next/image";
import { Report } from "./_components/Report";
import { Graph } from "./_components/graph";
import { Button } from '@/components/ui/button'


const Dashboard = () => {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <Image
        className="rounded-full flex "
        src="/user_img.png"
        alt="user_img"
        width="207"
        height="198"
      />
      <h1 className="text-4xl font-bold">Sumitra Nair</h1>
      <Report />
      <div className=" flex flex-col items-start w-full">
        <h1 className="text-4xl font-bold m-4 ml-28">Growth Trend Analysis</h1>
        <div className="text-4xl font-bold ml-28">
          <Graph />
        </div>
        <h1 className="text-4xl font-bold m-8 ml-28">Predicted Presentation</h1>
        <Button className="w-[300px] h-[56px] ml-36">Cephalic</Button>
        <h1 className="text-4xl font-bold m-8 ml-28">Fetal Growth Trajectory</h1>
          <img className="ml-80" src="/graphT.png" alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
