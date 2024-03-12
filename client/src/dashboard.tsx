import { Link } from "react-router-dom"
import { Searchbar } from "./components/searchbar"

const Dashboard = () => {
    return (
        <div className="flex items-center justify-center py-10 text-[#1F1F1F]">
            <div className="flex flex-col items-center w-3/4 gap-y-10">
                <Searchbar/>
                <h1 className="text-4xl font-bold">Welcome Doctor Sandeep Pandey 👋</h1>
                <div className="w-full flex flex-col gap-y-4">
                    <h2 className="text-2xl">Choose</h2>
                    <div className="flex gap-x-5 h-[200px]">
                        <Link to="/patient-record" className="bg-[#CDDEFF] text-[#2C3D8F] w-1/2 h-full flex justify-center items-center rounded-3xl">
                            <h3 className="text-4xl font-">Patient Record</h3>
                        </Link>
                        <Link to="/patient-register" className="bg-[#CDDEFF] text-[#2C3D8F] w-1/2 h-full flex justify-center items-center rounded-3xl">
                            <h3 className="text-4xl font-">Patient Register</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard