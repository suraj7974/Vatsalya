import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-60px)] w-full flex items-center justify-center text-[#1F1F1F]">
      <div className="w-3/4 h-2/3 bg-[#5A81FA] bg-opacity-20 rounded px-10 py-11 flex gap-x-5 items-center">
        <aside className="flex flex-col gap-y-2 items-start">
          <h1 className="text-4xl font-bold">Advanced Fetal<br/>Development Analysis<br/>for Doctors</h1>
          <p>Leverage AI and image analysis to gain comprehensive insights into fetal development</p>
          <button onClick={()=> navigate('/dashboard')} className="bg-[#1F1F1F] text-white p-2 px-3 hover:bg-opacity-95 transition-opacity rounded mt-4">Discover more</button>
        </aside>
        <img src="/images/results.png" className="w-3/4 rounded h-full object-cover" alt="" />
      </div>
    </div>
  );
}

export default Home;
