import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Dumbbell, GlassWater, Utensils } from "lucide-react";
import { Goal } from "./goal";


export const DailyGoals = () => {

    const goals = [
        {
            Icon: Dumbbell,
            name: "Exercise",
            desc: "Tailor-made virtual reality solutions for real estate professionals, providing personalized and branded virtual "
        },
        {
            Icon: GlassWater,
            name: "Drink",
            desc: "Tailor-made virtual reality solutions for real estate professionals, providing personalized and branded virtual "
        },
        {
            Icon: Utensils,
            name: "Eat",
            desc: "Tailor-made virtual reality solutions for real estate professionals, providing personalized and branded virtual "
        },
    ]

    return (
        <div className='flex flex-col items-center gap-y-10'>
            <h1 className='text-5xl'>Daily Goal's</h1>
            <Carousel className="w-2/3 relative">
                <CarouselContent className="p-4">
                    {goals.map((goal, i) => (
                        <CarouselItem key={i} className="basis-1/3">
                            <Goal
                                Icon={goal.Icon}
                                name={goal.name}
                                desc={goal.desc}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-10" />
                <CarouselNext className="absolute -right-10" />
            </Carousel>
        </div>
    );
};