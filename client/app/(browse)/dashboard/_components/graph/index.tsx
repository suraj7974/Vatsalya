import { Graphs } from "./graph";

export const Graph = () => {
  const graph = [
    {
      Image: "/graph1.png",
    },
    {
      Image: "/graph2.png",
    },
    {
      Image: "/graph3.png",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {graph.map((graph, i) => (
        <div key={i} className="basis-1/3">
          <Graphs image={graph.Image} />
        </div>
      ))}
    </div>
  );
};
