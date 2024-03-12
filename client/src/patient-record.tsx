import { Searchbar } from "./components/searchbar"

const PatientRecord = () => {
    const data = [
        {
            name: "Sneha Gupta",
            id: 590458,
            date: "2018-05-25",
        },
        {
            name: "Isha Patel",
            id: 396738,
            date: "2006-11-15",
        },
        {
            name: "Mahi Singh",
            id: 531687,
            date: "2012-09-22",
        },
        {
            name: "Neha Choudhury",
            id: 297036,
            date: "2008-09-26",
        },
        {
            name: "Pooja Tiwari",
            id: 219405,
            date: "2009-08-14",
        },
    ]
    return (
        <div className="flex items-center justify-center py-10 text-[#1F1F1F]">
            <div className="flex flex-col items-start w-3/4 gap-y-10">
                <Searchbar />
                <h3 className="text-3xl text-[#2C3D8F]">Patient Record</h3>
                <table className="bg-[#CDDEFF] w-full text-center text-xl">
                    <thead className="text-[#2C3D8F]">
                        <tr>
                            <th>Patient Name</th>
                            <th>ID Number</th>
                            <th>Last visit date </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length !== 0 && data.map(cell => (
                            <tr key={cell.id}>
                                <td>{cell.name}</td>
                                <td>{cell.id}</td>
                                <td>{cell.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PatientRecord