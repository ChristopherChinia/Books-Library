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
    <>
    {books?.length>0 ?  
 (<div className="box-container">
 {books.map((book) =>(
   <BookShelf 
   key={book.id}
   book={book}
   />
 ))}
 </div>
   ):(
   <div className="empty">
           <h2>No books found</h2>
         </div>
         )}
     </>
  )
}

export default BookStore