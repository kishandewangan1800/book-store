import React, { useEffect, useRef } from "react";
import { genreList } from "../genre";
import "./Header.css";

import { IoBookSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";

import Button from "../button/Button";

function Header({
  handleInput,
  handleSubject,
  subject,
  handlePage,
  handleRating,
  handlePrice,
  price,
  rating,
}) {
  let genre = subject;

  
  const headerRef = useRef(null);
  const submitRef = useRef(null);
  const filterRef = useRef(null);

  const handleFilter = () => {
    filterRef.current.classList.toggle("open");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitRef.current.value = "";
    submitRef.current.focus();
  };

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
        filterRef.current.classList.remove('open');
      } else {
        headerRef.current.classList.remove("shrink");
        filterRef.current.classList.remove('open');
      }
    };
    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header-container">
        <div
          className="logo"
          onClick={() => {
            handlePage();
            submitRef.current.value = "";
            genre = "";
            filterRef.current.classList.remove("open");
          }}
        >
          {" "}
          <IoBookSharp
            style={{ fontSize: "2.5rem", color: "#007aff", marginRight: "5px" }}
            className="bookstore"
          />{" "}
          Book
          <span className="half-logo">Store</span>
        </div>
        <div className="search">
          <div className="filter-container">
            <Button small="btn-small" handleClick={handleFilter}>
              <HiAdjustments />
            </Button>

            <div className="filter" ref={filterRef}>
              <ul className="lists">
                <li>
                  <select
                    value={genre}
                    onChange={handleSubject}
                    className="genre"
                  >
                    <option value="">Genre</option>
                    {genreList.map((list, ind) => (
                      <option key={ind} value={list}>
                        {list}
                      </option>
                    ))}
                  </select>
                </li>

                <li>
                  <div className="data"> {`${price} INR`} </div>

                  <div className="list-one">
                    <label htmlFor="price">Price</label>

                    <input
                      type="range"
                      className="range"
                      min={100}
                      max={10000}
                      value={price}
                      onChange={handlePrice}
                    />
                  </div>
                </li>

                <li>
                  <div className="data">{`${rating / 10} Star`}</div>

                  <div className="list-one">
                    <label htmlFor="rating">Rating</label>
                    <input
                      type="range"
                      className="range"
                      min={1}
                      max={50}
                      value={rating}
                      onChange={handleRating}
                    />
                  </div>
                </li>

                <li>
                  <Button
                    size={140}
                    className="apply"
                    handleClick={handleFilter}
                  >
                    Apply
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <input
              ref={submitRef}
              type="text"
              placeholder="Search"
              className="input"
              onChange={(e) => handleInput(e)}
            />
            <Button small="btn-small" handleClick={handleSubmit}>
              {" "}
              <FaSearch style={{ fontWeight: 900 }} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
