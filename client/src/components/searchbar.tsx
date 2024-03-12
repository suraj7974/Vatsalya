import { Search } from "lucide-react";


export const Searchbar = () => {
    return (
        <div className="bg-[#CDDEFF] text-[#2C3D8F] flex items-center w-full p-2 px-5 rounded-2xl">
            <input type="text" placeholder="Search Patient..." className="w-full p-2 text-lg placeholder:text-[#2C3D8F] focus:outline-none bg-transparent" />
            <Search className="w-6 h-6" />
        </div>
    );
};
