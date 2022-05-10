import React, { useState } from "react";
import "./Card.css";
import Preview from "../preview/Preview";

function Card({ item }) {
  const [preview, setPreview] = useState(false);

  const handlePreview = () => {
    setPreview(!preview);
  };

  const source = item.volumeInfo.imageLinks
    ? item.volumeInfo.imageLinks.smallThumbnail &&
      item.volumeInfo.imageLinks.thumbnail
    : "https://ecampus.unusia.ac.id/pustaka_unusia/main/gambar?gambar=%2Fopt%2Fgambar_perpus%2F1621913937359_13403099._UY400_SS400_.jpg.jpg";

  return (
    <div className="card">
      {preview ? (
        <Preview item={item} handlePreview={handlePreview} />
      ) : (
        <div className="card-container">
          <div className="image">
            <img src={source} alt="Cover Page" onClick={handlePreview} />
          </div>

          <div className="info">
            <div className="title">
              {" "}
              <big>
                <b> Title :</b>
              </big>{" "}
              {item.volumeInfo.title}
            </div>

            <div className="rating">
              <big>
                <b> Rating :</b>
              </big>{" "}
              {item.volumeInfo.averageRating
                ? item.volumeInfo.averageRating
                : "Not Available"}
            </div>

            <div className="genreType">
              <big>
                <b> Genre :</b>
              </big>{" "}
              {item.volumeInfo.categories
                ? item.volumeInfo.categories.join(", ")
                : "Not Available"}
            </div>

            <div className="price">
              <big>
                <b> Price :</b>
              </big>{" "}
              {item.saleInfo.saleability === "FOR_SALE"
                ? " " +
                  item.saleInfo.retailPrice.amount +
                  " " +
                  item.saleInfo.retailPrice.currencyCode
                : " Not Available"}
            </div>

            <div className="more">
              <a
                href={item.volumeInfo.infoLink}
                target="_blank"
                rel="noreferrer"
              >
                More
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
