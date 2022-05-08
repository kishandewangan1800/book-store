import React from "react";

import Card from "../card/Card";

const Model = ({ data }) => {
  return (
    <div>
      <div className="book-card active">
        <div className="card-layout">
          {data.map((item, index) => (
            <div key={index} className="card-single">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Model;
