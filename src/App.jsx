/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import InputComponent from "./components/InputComponent";
import ResultComponent from "./components/ResultComponent";
import { intervalToDuration } from "date-fns";

const App = () => {
  const [dayDifference, setDayDifference] = useState("");
  const [monthDifference, setMonthDifference] = useState("");
  const [yearDifference, setYearDifference] = useState("");

  const formatDate = (date) => {
    const dob = new Date(date);
    const todayDate = new Date();
    const result = intervalToDuration({
      start: dob,
      end: todayDate,
    });
    console.log(typeof dayDifference);
    setDayDifference(result.days);
    setMonthDifference(result.months);
    setYearDifference(result.years);
  };

  return (
    <div className="app-container">
      <div className="main-container">
        <InputComponent formatDate={formatDate} />
        <ResultComponent
          years={yearDifference}
          months={monthDifference}
          days={dayDifference}
        />
      </div>
    </div>
  );
};

export default App;
