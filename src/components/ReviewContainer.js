import React, { useState, useEffect } from "react";
import Review from "./Review";

const ReviewContainer = () => {
  const [review, displayReview] = useState([]);
  useEffect(() => {
    fetch("https://regal-busy-beaufort.glitch.me/Books")
      .then((r) => r.json())
      .then((data) => {
        displayReview(data);
      });
  }, [review]);

  const getViews = review.map((view) => (
    <Review key={view.id} view={view} onDelete={handleDeleteViews} />
  ));

  function handleDeleteViews(deletedreviews) {
    const updatedReviews = review.filter(
      (view) => view.id !== deletedreviews.id
    );
    displayReview(updatedReviews);
  }
  return (
    <div className="review-container">
      {review?.length > 0 ? getViews : <h2>No reviews found</h2>}
    </div>
  );
};

export default ReviewContainer;
