import React, { useState } from "react";

const Review = ({ view, onDelete }) => {
  const { title, summary, author } = view;
  const [isRead, setMarkRead] = useState();

  const MarkIsRead = () => {
    setMarkRead((isRead) => !isRead);
  };

  function deleteReview() {
    fetch(`https://regal-busy-beaufort.glitch.me/Books/${view.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => onDelete(view));
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <div className="button-container">
        <button className="btn" onClick={MarkIsRead}>
          Mark as {isRead ? "Unread" : "Read"}
        </button>
        <button className="delete-btn" onClick={deleteReview}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Review;
