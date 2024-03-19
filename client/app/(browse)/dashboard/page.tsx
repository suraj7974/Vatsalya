import React from "react";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full flex "
        src="/user_img.png"
        alt="user_img"
        width="207"
        height="198"
      />
      <h1 className="text-4xl font-bold">Sumitra Nair</h1>
      <div>
        
      </div>
    </div>
  );
};

export default Dashboard;
