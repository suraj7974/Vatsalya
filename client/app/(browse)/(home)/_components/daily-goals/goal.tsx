import { LucideIcon } from "lucide-react"

interface GoalProps {
    Icon: LucideIcon;
    name: string;
    desc: string;
}

export const Goal = ({
    Icon,
    name,
    desc
}: GoalProps) => {
    return (
        <div className="h-[400px] rounded-lg p-3 m-4 flex flex-col gap-y-4 border-slate-400 shadow-[0_2px_12px_4px] shadow-slate-300 mx-auto">
            <div className="h-2/3 w-full bg-slate-800 flex flex-col text-white gap-y-5 items-center justify-center rounded-md">
                <Icon className="w-16 h-16" />
                <h3 className="text-2xl">{name}</h3>
            </div>
            <p className="text-slate-700">{desc}</p>
        </div>
    )
}
