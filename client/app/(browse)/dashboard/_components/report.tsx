import { Button } from '@/components/ui/button'

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
    <div className="h-[477px] w-[400px] rounded-lg p-3 m-4 flex flex-row gap-y-4 border-slate-400 shadow-[0_2px_12px_4px] shadow-slate-300 mx-auto">
      <div className="flex flex-col items-center gap-y-1">
        <div className="w-96 h-72">{Image}</div>
        <h1 className="text-3xl">{report_no}</h1>
        <h3 className="text-1xl">{weeks}</h3>
        <h3 className="text-1xl">{weight}</h3>
      <p className="text-slate-700">{note}</p>
      <Button className="mt-2">Downlad Report</Button>
      </div>
    </div>
  );
};
