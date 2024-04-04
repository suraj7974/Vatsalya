import React from "react";
import Image from "next/image";
import { Button } from '@/components/ui/button'


const DownloadReport = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-y-10">
      <h1 className="text-3xl font-medium">ANALYSIS RESULTS</h1>
      <div className="flex gap-x-12">
        <Image
          className="flex"
          src="/downloadReport.png"
          alt="downloadReport"
          width="405"
          height="274"
        />
        <Image
          className="flex"
          src="/downloadReportMask.png"
          alt="downloadReportMask"
          width="405"
          height="274"
        />
      </div>
      <div className="flex flex-col">
        <div className="border-4 border-solid  border-black border-b-[#2C3D8F] w-[1331px] h-[150px]">
          file name center x_mm
        </div>
        <div className="border-4 border-solid  border-black border-t-[#2C3D8F] w-[1331px] h-[150px]"></div>
      </div>
      
    </div>
    <div className="text-2xl flex flex-col gap-y-2 ml-56">
       <h1 className="font-bold"> ESTIMATED FETAL WEIGHT</h1>
        <div className="w-[300px] h-[56px] bg-black text-white flex justify-center items-center">
          328.62 g
        </div>
      </div>
      <div className="text-2xl flex flex-col gap-y-2 ml-56 mt-10">
       <h1 className="font-bold"> FETAL WEIGHT GROWTH</h1>
       <Image className="" width="405" height="274" src="/graph1.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-8">
        <h1 className="text-2xl font-bold">NOTE</h1>
        <div className="border-2 border-solid bg-black text-white w-[1152px] h-[252px] flex justify-center items-center text-xl">Based on today's findings, your baby's development appears to be progressing well.</div>
      </div>
      <Button className="w-[300px] h-[56px] mx-auto bg-[#0368DF]">Download Report</Button>
      </>
  );
};

export default DownloadReport;
