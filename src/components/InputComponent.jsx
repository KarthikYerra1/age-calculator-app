/* eslint-disable react/prop-types */

import { useState } from "react";
import { isExists } from "date-fns";
import iconArrow from "../assets/images/iconArrow.svg";

const InputComponent = ({ formatDate }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [error, setError] = useState(false);

  const handleKeyPress = (e) => {
    const keyCode = e.keyCode || e.which;

    const allowed = [8, 46, 37, 39];
    if (!(keyCode >= 48 && keyCode <= 57) && !allowed.includes(keyCode)) {
      e.preventDefault();
    }
  };

  const renderInput = (id, name, value, setFunction, errorMsg) => (
    <div className="input-element">
      <label style={error ? { color: "hsl(0, 100%, 67%)" } : null} htmlFor={id}>
        {name.toUpperCase()}
      </label>
      <input
        style={error ? { borderColor: "hsl(0, 100%, 67%)" } : null}
        id={id}
        value={value}
        onChange={(e) => setFunction(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
      />
      {error && <p className="error-msg">Must be a Valid {errorMsg}</p>}
    </div>
  );

  const handleSubmitDob = (e) => {
    e.preventDefault();
    if (day === "" || month === "" || year === "") {
      setError(true);
      return;
    }
    setError(false);
    const dateValidated = isExists(
      Number(year),
      Number(month) - 1,
      Number(day)
    );
    if (dateValidated) {
      const dateString = `${year}-${month.padStart(2, "0")}-${day.padStart(
        2,
        "0"
      )}`;
      formatDate(dateString);
    } else {
      setError(true);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmitDob}>
      <div className="input-elements-container">
        {renderInput("day", "Day", day, setDay, "Date")}
        {renderInput("month", "Month", month, setMonth, "Month")}
        {renderInput("year", "Year", year, setYear, "Year")}
      </div>
      <div className="button-element-container">
        <hr />
        <button
          type="submit"
          style={
            error
              ? { backgroundColor: "hsl(0, 0%, 8%)" }
              : { backgroundColor: "hsl(259, 100%, 65%)" }
          }
        >
          <img
            style={
              error
                ? { rotate: "-180deg", transition: "1s" }
                : { transition: "1s", rotate: "0deg" }
            }
            src={iconArrow}
            alt="arrow-btn"
            width="46"
            height="44"
          />
        </button>
      </div>
    </form>
  );
};

export default InputComponent;
