import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const DownloadReport = () => {
  return (
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
      <div>djksfnvlizd</div>
      <div>djksfnvlizd</div>
      <Button className="w-[300px] h-[56px] ml-36">328.62 g</Button>
    </div>
  );
};

export default DownloadReport;
