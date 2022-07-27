import React from 'react'

const BookShelf = () => {
  return (
    <>
    <div className="movie">
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
  </>
  )
}

export default BookShelf