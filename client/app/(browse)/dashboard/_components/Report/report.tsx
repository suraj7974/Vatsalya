import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link';

interface ReportProps {
  image: string;
  report_no: string;
  weeks: string;
  weight: string;
  note: string;
}

export const Reports = ({
  image,
  report_no,
  weeks,
  weight,
  note,
}: ReportProps) => {
  return (
    <div className="h-[477px] w-[400px] rounded-lg p-3 m-4 flex flex-row gap-y-4 border-slate-400 shadow-[0_2px_12px_4px] shadow-slate-300 mx-auto">
      <div className="flex flex-col items-center gap-y-1">
        <Image src={image} alt='report' width={100} height={100} className="w-full h-1/2 rounded mb-2" />
        <h1 className="text-3xl">{report_no}</h1>
        <h5 className='text-sm'>{weeks}</h5>
        <h5 className='text-sm'>{weight}</h5>
        <p className="text-slate-700 text-sm">{note}</p>
        <Link href='download-report'>
        <Button className="mt-4">Downlad Report</Button>
        </Link>
      </div>
    </div>
  );
};
