import Image from "next/image";

interface GraphProps {
  image: string;
}

export const Graphs = ({ image }: GraphProps) => {
  return (
    <div className="h-[285px] w-[350px] rounded-lg p-3 m-4 ml-8 border-slate-400 shadow-[0_2px_12px_4px] shadow-slate-300 mx-auto">
      <div className="">
        <Image src={image} alt="report" width={400} height={400} className="" />
      </div>
    </div>
  );
};
