import React from "react";

const BookShelf = ({ book }) => {
  const { title, cover_image, releaseDate, author,summary } = book;
  return (
    <div className="book-shelf">
      <div className="book-box">
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
      <div>
      </div>
    </div>
  );
};

export default BookShelf;
