import React, { useState } from "react";
import Overlay from "./Overlay";

const BookShelf = ({ book }) => {
  const { title, cover_image, releaseDate, author } = book;

  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);
  return (
    <div className="book-shelf">
      <div
        className="book-box"
        onClick={() => {
          setShow(true);
          setItem(book);
        }}
      >
        <div>
          <p>{releaseDate}</p>
        </div>
        <div>
          <img
            src={cover_image ? cover_image : "https://via.placeholder.com/400"}
            alt={title}
          />
        </div>
        <div>
          <h3>{title}</h3>
          <h3>- By {author}</h3>
        </div>
      </div>
      <Overlay show={show} book={bookItem} onClose={() => setShow(false)} />
    </div>
  );
};

export default BookShelf;
