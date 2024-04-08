/* eslint-disable react/prop-types */

const ResultComponent = ({ years, months, days }) => {
  if (years === "" || months === "" || days === "") {
    years = "--";
    months = "--";
    days = "--";
  }
  return (
    <div className="result-container">
      <h1>
        <span>{years}</span> years
      </h1>
      <h1>
        <span>{months}</span> months
      </h1>
      <h1>
        <span>{days}</span> days
      </h1>
    </div>
  );
};

export default ResultComponent;
