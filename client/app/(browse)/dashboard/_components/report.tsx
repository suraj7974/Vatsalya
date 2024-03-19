import { LucideIcon } from "lucide-react";

interface ReportProps {
  Image: string;
  report_no: string;
  weeks: string;
  weight: string;
  note: string;
}

export const Reports = ({
  Image,
  report_no,
  weeks,
  weight,
  note,
}: ReportProps) => {
  return (
    <div className="h-[400px] rounded-lg p-3 m-4 flex flex-row gap-y-4 border-slate-400 shadow-[0_2px_12px_4px] shadow-slate-300 mx-auto">
      <div>{Image}</div>
      <h1>{report_no}</h1>
      <h3 className="text-2xl">{weeks}</h3>
      <h3 className="text-2xl">{weight}</h3>
      <p className="text-slate-700">{note}</p>
    </div>
  );
};
