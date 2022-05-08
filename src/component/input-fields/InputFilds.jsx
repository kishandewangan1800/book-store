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
      <select value={number} onChange={handleOption}>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
      </select>
      <div className="button-container">
        {increment <= 0 ? (
          <Button handleClick={handlePrev} disabled={true}>
            Prev
          </Button>
        ) : (
          <Button handleClick={handlePrev}>Prev</Button>
        )}
        {increment + number >= 40 ? (
          <Button handleClick={handleNext} disabled={true}>
            Next{" "}
          </Button>
        ) : (
          <Button handleClick={handleNext}>Next </Button>
        )}
      </div>
    </div>
  );
};

export default InputFilds;
