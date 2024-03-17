import Link from "next/link";
import { LoginAction } from "./actions";
import { NavLink } from "./nav-link";

export const Navbar = () => {
    const paths = [
        {
            name: "Home",
            route: "/"
        },
        {
            name: "Dashboard",
            route: "/dashboard"
        },
        {
            name: "About us",
            route: "/about-us"
        },
    ]

    return (
        <nav className="px-20 h-14 z-50 fixed w-full bg-white text-lg top-0 flex justify-between items-center">
            <h1 className="font-southmore font-bold text-2xl">Vatsalya</h1>
            <div className="flex justify-between items-center gap-x-20">
                {paths.map((path, i) => (
                    <NavLink key={i} name={path.name} route={path.route} />
                ))}
            </div>
            <LoginAction />
        </nav>
    );
};