import React from 'react'

const Overlay = ({ show, book, onClose }) => {
    if (!show) {
        return null;
    }
    let thumbnail = book.cover_image;
    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <div className="inner-box">
                        <img src={thumbnail} alt={book.title} />
                        <div className="info">
                            <h1>{book.title}</h1>
                            <h3>{book.author}</h3>
                            <h4>{book.price}</h4>
                            <button className="btn" onClick={onClose}>Close</button>
                            <a href={"previewLink"}><button>Read more</button></a>
                            <h4 className="description">{book.summary}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overlay