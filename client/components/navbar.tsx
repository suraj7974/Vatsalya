import { Bell, User, User2 } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    const hoverClass = "h-0.5 w-0 group-hover:w-full transition-all rounded bg-blue-500 duration-400"
    return (
        <nav className="px-20 h-14 z-50 fixed w-full bg-white text-lg top-0 flex justify-between items-center">
            <h1 className="font-southmore font-bold text-2xl">Vatsalya</h1>
            <div className="flex justify-between items-center gap-x-20">
                <Link href="/" className="flex flex-col items-center hover:text-blue-600 group">Home<span className={hoverClass}></span></Link>
                <Link href="/dashboard" className="flex flex-col items-center hover:text-blue-600 group">Dashboard<span className={hoverClass}></span></Link>
                <Link href="/about-us" className="flex flex-col items-center hover:text-blue-600 group">About us<span className={hoverClass}></span></Link>
            </div>
            <div className="flex items-center gap-x-5">
                <Bell className="w-6 h-6 cursor-pointer hover:text-blue-600 hover:fill-blue-600" />
                <User className="w-6 h-6 cursor-pointer hover:text-blue-600 hover:fill-blue-600" />
            </div>
        </nav>
    );
};