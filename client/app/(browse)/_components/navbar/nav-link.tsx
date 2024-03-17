"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    name: string;
    route: string;
}

export const NavLink = ({ name, route }: NavLinkProps) => {
    const hoverClass = "h-0.5 w-0 group-hover:w-full transition-all rounded bg-blue-500 duration-400";
    const path = usePathname();

    return (
        <Link
            href={route}
            className={cn(
                "flex flex-col items-center hover:text-blue-600 group",
                path === route && "text-blue-600"
            )}>
            {name}
            <span className={cn(
                hoverClass,
                path === route && "w-full"
            )}></span>
        </Link>
    )
}
