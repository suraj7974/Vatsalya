import "./MoreResults.css";

function MoreResults() {
  return (
    <div className="MoreResults">
      <table
        className="seemore-table"
        cellSpacing="0"
        align="center"
        cellPadding="10px"
      >
        <tr className="rows">
          <th className="columns">
            File Name
          </th>
          <th className="columns">Center_x_mm</th>
          <th className="columns">Center_y_mm</th>
          <th className="columns">Semi_axes_a_mm</th>
          <th className="columns">Semi_axes_b_mm</th>
          <th className="columns">Angle_rad</th>
          <th className="columns">OFD</th>
          <th className="columns">BPD </th>
          <th className="columns">Head Circumference(in cm)</th>
          <th className="columns">Gestational Age (in Weeks)</th>
        </tr>
        <tr className="rows_1">
          <td className="columns" rowSpan={9}>
          000_HC.png
          </td>
          <td className="columns" rowSpan={9}>90.010766</td>
          <td className="columns" rowSpan={9}>63.376299</td>
          <td className="columns" rowSpan={9}>50.143532</td>
          <td className="columns" rowSpan={9}>47.266806</td>
          <td className="columns" rowSpan={9}>0.917420</td>
          <td className="columns" rowSpan={9}>100.3</td>
          <td className="columns" rowSpan={9}>94.5</td>
          <td className="columns" rowSpan={9}>22.88</td>
          <td className="columns" rowSpan={9}>24</td>
          
        </tr>
        {/* <tr className="rows">
          <td className="columns">Data 1</td>
          <td className="columns">Data 2</td>
          <td className="columns">Data 3</td>
          <td className="columns">Data 4</td>
          <td className="columns">Data 5</td>
          <td className="columns">Data 6</td>
        </tr>
        <tr className="rows">
          <td className="columns">Data 1</td>
          <td className="columns">Data 2</td>
          <td className="columns">Data 3</td>
          <td className="columns">Data 4</td>
          <td className="columns">Data 5</td>
          <td className="columns">Data 6</td>
        </tr>
        <tr className="rows">
          <td className="columns">Data 1</td>
          <td className="columns">Data 2</td>
          <td className="columns">Data 3</td>
          <td className="columns">Data 4</td>
          <td className="columns">Data 5</td>
          <td className="columns">Data 6</td>
        </tr>
        <tr className="rows">
          <td className="columns">Data 1</td>
          <td className="columns">Data 2</td>
          <td className="columns">Data 3</td>
          <td className="columns">Data 4</td>
          <td className="columns">Data 5</td>
          <td className="columns">Data 6</td>
        </tr> */}
      </table>
    </div>
  );
}

export default MoreResults;
