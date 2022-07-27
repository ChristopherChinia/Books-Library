import React from 'react'

const Overlay = ({show,book,onClose}) => {
    if(!show)
    {
        return null;
    }
    let thumbnail= book.cover_image;
  return (
    <>
    <div className="overlay">
        <div className="overlay-inner">
            <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
            <div className="inner-box">
                <img src={thumbnail} alt="" />
                <div className="info">
                    <h1>{book.title}</h1>
                    <h3>{book.author}</h3>
                    <a href={"previewLink"}><button>More</button></a>
                </div>
            </div>
            <h4 className="description">{book.summary}</h4>
        </div>
    </div>
</>
  )
}

export default Overlay