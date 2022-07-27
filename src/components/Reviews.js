import React,{ useState} from 'react'
import ReviewsForm from './ReviewsForm'
import ReviewContainer from './ReviewContainer'

const Reviews = () => {
  const [showReview, setShowReview] = useState();

  const setNewPoem = () => {
    console.log("default")
  };

  function switchTable() {
    setShowReview((showReview) => !showReview);
  }
  return (
    <div className="review">
    <div className="sidebar">
      <button classname="btn"  onClick={switchTable}>
        {showReview ? "Hide" : "Show"} new review form
      </button>
      
      {/* using ternary operator to display the poem form */}
      {showReview? <ReviewsForm setNewPoem={setNewPoem} /> : null}
    </div>
    <ReviewContainer setNewPoem={setNewPoem}/>
  </div>
  )
}

export default Reviews