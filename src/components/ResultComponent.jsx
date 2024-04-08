/* eslint-disable react/prop-types */

const ResultComponent = ({ years = "0", months = "0", days = "0" }) => {
  if (years === "" || months === "" || days === "") {
    years = "--";
    months = "--";
    days = "--";
  }
  return (
    <div className="result-container">
      <h1>
        <span>{years}</span> {years === 1 ? "year" : "years"}
      </h1>
      <h1>
        <span>{months}</span> {months === 1 ? "month" : "months"}
      </h1>
      <h1>
        <span>{days}</span> {days === 1 ? "day" : "days"}
      </h1>
    </div>
  );
};

export default ResultComponent;
