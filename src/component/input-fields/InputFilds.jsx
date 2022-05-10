import React from "react";
import Button from "../button/Button";
import "./InputFilds.css";

const InputFilds = ({
  handleNext,
  handlePrev,
  handleOption,
  number,
  increment,
}) => {
  return (
    <div className="input-filds">
      <select value={number} onChange={handleOption} className="select-filds">
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
      </select>
      <div className="button-container">
        {increment <= 0 ? (
          <Button handleClick={handlePrev} disabled={true} size={120}>
            Prev
          </Button>
        ) : (
          <Button handleClick={handlePrev} size={120}>
            Prev
          </Button>
        )}
        {increment + number >= 40 ? (
          <Button handleClick={handleNext} disabled={true} size={120}>
            Next{" "}
          </Button>
        ) : (
          <Button handleClick={handleNext} size={120}>
            Next{" "}
          </Button>
        )}
      </div>
    </div>
  );
};

export default InputFilds;
