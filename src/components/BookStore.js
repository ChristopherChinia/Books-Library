import React,{ useState, useEffect} from 'react'
import BookShelf from './BookShelf'

const BookStore = () => {
    // useState hook to store book data
    const [books, displayBooks]=useState([])

    // useEffect hook to provide get accessability
    useEffect(() =>{
        fetch("http://localhost:8001/Books")
        .then((r) => r.json())
            .then((data) => {
              console.log(data);
      })
      },[]);
  return (
    <div>
        <h1>This is my bookstore component!</h1>
    </div>
  )
}

export default BookStore