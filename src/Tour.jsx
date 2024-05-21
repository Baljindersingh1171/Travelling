import { useState } from "react";

function Tour({ name, id, info, image, price, tours, setTours }) {
  //   function handleClick(id) {}
  const [readMore, setReadMore] = useState(false);
  function handleClick(id) {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  }
  return (
    <div className="container">
      <img src={image} />
      <h4>{name}</h4>

      <p>
        {readMore ? info : `${info.substring(0, 100)}....`}
        <button id="readmore" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>
      <p>{`Price=${price}$`}</p>
      <button id="notinterested" onClick={() => handleClick(id)}>
        Not interested
      </button>
      {/* <button onClick={handleClick(id)}>Not interested</button> */}
    </div>
  );
}

export default Tour;
