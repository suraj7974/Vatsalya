import { Input } from "./components/input"
import { Searchbar } from "./components/searchbar"

const PatientRegister = () => {
    return (
        <div className="flex items-center justify-center py-10 text-[#1F1F1F]">
            <div className="flex flex-col items-start w-3/4 gap-y-10">
                <Searchbar />
                <h3 className="text-3xl text-[#2C3D8F]">Patient Register</h3>
                <div className="w-full flex flex-col items-center gap-y-3">
                    <input id="file" type="file" className="hidden" />
                    <label htmlFor="file" className="bg-[#5A81FA] hover:bg-opacity-95 p-2 px-3 rounded text-white">Upload file</label>
                    <Input label="Center x(mm)" />
                    <Input label="Center y(mm)" />
                    <Input label="Semi axes a(mm)" />
                    <Input label="Semi axes b(mm)" />
                    <Input label="Angle(radian)" />
                    <Input label="OFD" />
                    <Input label="BFD" />
                    <Input label="Head circumference(cm)" />
                    <Input label="Gestational Age(in weeks)" />
                    <Input label="Estimated Fetal Weight" />
                    <button className="bg-[#5A81FA]  hover:bg-opacity-95 p-2 px-3 rounded text-white">Analyze</button>
                </div>
            </div>
        </div>
    )
}

export default PatientRegister