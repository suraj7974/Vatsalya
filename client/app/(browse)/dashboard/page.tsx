import React from "react";
import Image from "next/image";
import { Report } from "./_components";

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
        <h1 className="text-4xl font-bold ml-28">Growth Trend Analysis</h1>
      </div>
    </div>
  );
};

export default Dashboard;
