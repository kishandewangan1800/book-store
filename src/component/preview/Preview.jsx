import React from "react";
import "./Preview.css";
import { GiSplitCross } from "react-icons/gi";

const Preview = ({ item, handlePreview }) => {
  const source = item.volumeInfo.imageLinks
    ? item.volumeInfo.imageLinks.smallThumbnail &&
      item.volumeInfo.imageLinks.thumbnail
    : "https://ecampus.unusia.ac.id/pustaka_unusia/main/gambar?gambar=%2Fopt%2Fgambar_perpus%2F1621913937359_13403099._UY400_SS400_.jpg.jpg";

  return (
    <div className="preview">
      <GiSplitCross className="cancel-icon" onClick={handlePreview} />
      <div className="data-1">
        <div className="image-prev">
          <img src={source} alt="Cover Page" className="img-prev" />
        </div>
        <div className="info">
          <div className="title">
            {" "}
            <big>
              <b> Title : </b>
            </big>{" "}
            {item.volumeInfo.title}
          </div>
          <div className="subtitle">
            {" "}
            <big>
              <b> Sub Title : </b>
            </big>{" "}
            {item.volumeInfo.subtitle
              ? item.volumeInfo.subtitle
              : "No Subtitle Available"}
          </div>
          <div className="rating">
            <big>
              <b> Rating : </b>
            </big>{" "}
            {item.volumeInfo.averageRating
              ? item.volumeInfo.averageRating
              : "Not Available"}
          </div>
          <div className="genreType">
            <big>
              <b> Genre : </b>
            </big>{" "}
            {item.volumeInfo.categories
              ? item.volumeInfo.categories.join(", ")
              : "Not Available"}
          </div>
          <div className="author">
            <big>
              <b> Author : </b>
            </big>
            {item.volumeInfo.authors
              ? item.volumeInfo.authors.join(", ")
              : "Not Available"}
          </div>
          <div className="price">
            <big>
              <b> Price : </b>
            </big>{" "}
            {item.saleInfo.saleability === "FOR_SALE"
              ? " " +
                item.saleInfo.retailPrice.amount +
                " " +
                item.saleInfo.retailPrice.currencyCode
              : " Not Available"}
          </div>
          <div className="page-count">
            <big>
              <b> Page Count : </b>
            </big>{" "}
            {item.volumeInfo.pageCount
              ? item.volumeInfo.pageCount
              : "Not Available"}
          </div>
          <div className="isbn">
            <big>
              <b> ISBN : </b>
            </big>{" "}
            {item.volumeInfo.industryIdentifiers
              ? item.volumeInfo.industryIdentifiers[0].identifier
              : "Not Available"}
          </div>
          <div className="published">
            <big>
              <b> Published On : </b>
            </big>{" "}
            {item.volumeInfo.publishedDate
              ? item.volumeInfo.publishedDate
              : "Not Available"}
          </div>
          <div className="publisher">
            <big>
              <b> Publisher : </b>
            </big>{" "}
            {item.volumeInfo.publisher
              ? item.volumeInfo.publisher
              : "Not Available"}
          </div>
        </div>
      </div>

      <div className="data-2">
        <big>
          <b> Description : </b>
        </big>
        <div className="span">
          {item.volumeInfo.description
            ? item.volumeInfo.description
            : "Please go back to the Page and click on More !"}
        </div>
      </div>
    </div>
  );
};

export default Preview;
