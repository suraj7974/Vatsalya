import { Reports } from "./report";

export const Report = () => {
  const reports = [
    {
      Image: "/report1.png",
      report_no: "Report 1",
      weeks: "week 13 ",
      weight: "Fetal_weight: 236g",
      note: "Note: Eat a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Avoid raw or undercooked foods, high-mercury fish.",
    },
    {
      Image: "/report2.png",
      report_no: "Report 2",
      weeks: "week 21 ",
      weight: "Fetal_weight: 246g",
      note: "Note: Eat a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Avoid raw or undercooked foods, high-mercury fish.",
    },
    {
      Image: "/report3.png",
      report_no: "Report 3",
      weeks: "week 34 ",
      weight: "Fetal_weight: 256g",
      note: "Note: Eat a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Avoid raw or undercooked foods, high-mercury fish.",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {reports.map((report, i) => (
        <div key={i} className="basis-1/3">
          <Reports
            image={report.Image}
            report_no={report.report_no}
            weeks={report.weeks}
            weight={report.weight}
            note={report.note}
          />
        </div>
      ))}
    </div>
  );
};
