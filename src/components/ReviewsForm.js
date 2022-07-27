import React from 'react'

const ReviewsForm = () => {
  return (
    <form className="add-form">
    <div className="form-control">
        <label>Title</label>
        <input  placeholder="Title" required
    />
    </div>
    <div className="form-control">
        <label>Author</label>
        <input  placeholder="Author" required
    />
    </div>
    <div className="form-control">
        <label>image</label>
        <input  placeholder="Add image" 
    />
    </div>
    
    <div className="form-control">
        <label>summary</label>
        <textarea
        placeholder="Write your summary here..."
        rows={10}
        required
      />
        </div>
    <input type='submit' value='Share your summary' className="btn-block"/>
</form>
  )
}

export default ReviewsForm