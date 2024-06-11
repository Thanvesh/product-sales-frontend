import { PieChart, Pie, Cell, Legend } from "recharts";

import "./index.css";

const PieChartTask = (props) => {
  const { pieChartData, selectMonth, months, changeMonth } = props;
  const changeMonthText = (event) => {
    changeMonth(event);
  };


  const RectangleIcon = ({ width, height }) => (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <rect width={width} height={height} fill="#6ce5e8" />
    </svg>
  );
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF1919", "#FF6347"];

  // Generate an array of random colors based on the number of data points
  return (
    <div className="pieChart-container">
      <div className="pieChart-header-container">
        <h1 className="pieChart-header">Pie Chart Stats - </h1>
        <select
          value={selectMonth}
          onChange={changeMonthText}
          className="select-month"
        >
          {months.map((eachMonth) => (
            <option
              key={eachMonth.value}
              value={eachMonth.value}
              className="checked-text"
            >
              {eachMonth.displayText}
            </option>
          ))}
        </select>
      </div>
      <PieChart width={1000} height={400}>
        <Pie
          data={pieChartData}
          cx="50%"
          cy="30%"
          outerRadius="60%"
          dataKey="items"
          nameKey="category"
          label
        >
          {pieChartData.map((eachCell, index) => (
            <Cell name={eachCell.category} fill={colors[index]} />
          ))}
        </Pie>
        <Legend
  iconType="circle"
  layout="horizontal"
  verticalAlign="bottom"
  align="center"
  wrapperStyle={{
    fontSize: 16,
    fontFamily: "sans-serif",
  }}
  iconSize={20} // Adjust the size of the legend icon
  icon={<RectangleIcon width={500} height={5} />} // Custom rectangle icon
/>

      </PieChart>
    </div>
  );
};

export default PieChartTask;