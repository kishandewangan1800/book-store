import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";

import { categoryList } from "../genre";

import Header from "../header/Header";
import InputFilds from "../input-fields/InputFilds";
import Model from "../model/Model";
import Footer from "../footer/Footer";

function Main() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState(
    categoryList[Math.floor(Math.random() * categoryList.length)]
  );

  const [number, setNumber] = useState(10);
  const [increment, setIncrement] = useState(0);
  const apiKey = "AIzaSyDqe5GUyT60OK1keY7cNXY4Fu91DU3k5vw";
  const [genreType, setGenreType] = useState("");

  const url = `https://www.googleapis.com/books/v1/volumes?q=${input}+${
    genreType ? "subject" : ""
  }:${genreType}&key=${apiKey}&maxResults=40`;

  const handlePage = () => {
    setInput(categoryList[Math.floor(Math.random() * categoryList.length)]);
  };

  const handlePrev = () => {
    if (increment - number < 0) {
      setIncrement(0);
    } else {
      setIncrement((prevState) => prevState - number);
    }
  };

  const handleNext = () => {
    if (Number(increment + number + number) >= 40) {
      setIncrement(40 - number);
    } else {
      setIncrement((prevState) => prevState + number);
    }
  };

  const handleOption = (e) => {
    const num = Number(e.target.value);
    if (num + increment >= 40) {
      setIncrement(40 - num);
    }
    setNumber(Number(e.target.value));
  };

  const handleInput = (e) => {
    if (e.target.value === "") {
      setInput(categoryList[Math.floor(Math.random() * categoryList.length)]);
    } else {
      setInput(e.target.value);
    }
  };

  const handleSubject = (e) => {
    setGenreType(e.target.value);
  };

  useEffect(() => {
    const apiRender = async () => {
      try {
        const response = await axios.get(url);
        const result = await response.data.items;
        setData(result.splice(increment, number));
      } catch (err) {
        // console.log(err);
        // console.log(increment, number, input)
      }
    };

    apiRender();
  }, [url, number, increment]);

  return (
    <div className="main">
      <Header
        handleInput={handleInput}
        handleSubject={handleSubject}
        subject={genreType}
        handlePage={handlePage}
      />

      <Model data={data} />

      <InputFilds
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleOption={handleOption}
        number={number}
        increment={increment}
      />
      <Footer />
    </div>
  );
}

export default Main;