import "./index.css";

const Statistics = (props) => {
  const { statisticsDetails, selectMonth, months, changeMonth } = props;
  const statisticsObject = statisticsDetails.reduce((acc, object) => {
    return { ...acc, ...object };
  }, {});
  const {
    total_sale_amt,
    Total_sold_items,
    Total_unSold_items,
  } = statisticsObject;
  const changeMonthText = (event) => {
    changeMonth(event);
  };
  return (
    <div className="statistics-container">
      <div className="statistics-header-container">
        <h1 className="statistics-header">Statistics - </h1>
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
      <table style={{ border: "none", maxHeight: "600px", maxWidth: "400px", borderRadius: "20px", padding: "10px" }}>
  <tbody>
    <tr>
      <td style={{ border: "none", padding: "10px 20px" }}>Total sale</td>
      <td style={{ border: "none", padding: "10px 20px" }}>{Math.round(total_sale_amt * 100) / 100}</td>
    </tr>
    <tr>
      <td style={{ border: "none", padding: "10px 20px" }}>Total sold item</td>
      <td style={{ border: "none", padding: "10px 20px" }}>{Total_sold_items}</td>
    </tr>
    <tr>
      <td style={{ border: "none", padding: "10px 20px" }}>Total not sold item</td>
      <td style={{ border: "none", padding: "10px 20px" }}>{Total_unSold_items}</td>
    </tr>
  </tbody>
</table>



    </div>
  );
};

export default Statistics;