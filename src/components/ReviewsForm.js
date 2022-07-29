import React,{ useState} from 'react'

const ReviewsForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [summary, setSummary] = useState("");
    const [year, setYear] = useState("");

    function HandleTitlechange(event) {
        setTitle(event.target.value);
      }

      function HandleImagechange(event) {
        setImage(event.target.value);
      }
    
      function HandleAuthorChange(event) {
        setAuthor(event.target.value);
      }
    
      function HandleSummaryChange(event) {
        setSummary(event.target.value);
      }

      function HandleYearChange(event) {
        setYear(event.target.value);
      }

      function HandleSubmit(e) {
        e.preventDefault();
        const sumData = {
          title: title,
          cover_image: image,
          author: author,
          summary: summary,
          releaseDate: year,
        };
    
        fetch("https://regal-busy-beaufort.glitch.me/Books",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sumData),
        });
    
        setAuthor("");
        setImage("");
        setSummary("");
        setTitle("");
        setYear("");
      }

  return (
    <form className="add-form" onSubmit={HandleSubmit}>
    <div className="form-control">
        <label>Title</label>
        <input  placeholder="Title" required
        onChange={HandleTitlechange}
        value={title}
    />
    </div>
    <div className="form-control">
        <label>Author</label>
        <input  placeholder="Author" required
        onChange={HandleAuthorChange}
        value={author}
    />
    </div>
    <div className="form-control">
        <label>image</label>
        <input  placeholder="Add image"
        onChange={HandleImagechange} 
        value={image}
    />
    </div>

    <div className="form-control">
        <label>year</label>
        <input  placeholder="Year" required
        onChange={HandleYearChange}
        value={year}
    />
    </div>
    
    <div className="form-control">
        <label>summary</label>
        <textarea
        placeholder="Write your summary here..."
        rows={10}
        required
        onChange={HandleSummaryChange}
        value={summary}
      />
        </div>
    <input type='submit' value='Share your summary' className="btn-block"/>
</form>
  )
}

export default ReviewsForm