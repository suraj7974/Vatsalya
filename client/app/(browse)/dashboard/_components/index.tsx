import { Reports } from "./report";
import React from "react";

export const Report = () => {
  const reports = [
    {
      Image: "image_report",
      report_no: "1",
      weeks: "week 13 ",
      weight: "Fetal_weight: 236g",
      note: "Exercise",
    },
    {
      Image: "image_report",
      report_no: "Report 2",
      weeks: "week 21 ",
      weight: "Fetal_weight: 246g",
      note: "Drink",
    },
    {
      Image: "image_report",
      report_no: "3",
      weeks: "week 34 ",
      weight: "Fetal_weight: 256g",
      note: "Eat",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {reports.map((report, i) => (
        <div key={i} className="basis-1/3">
          <Reports
            Image={report.Image}
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
