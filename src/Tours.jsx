import Tour from "./Tour";

function Tours({ tours, setTours }) {
  return (
    <div className="main">
      {tours.map((t) => (
        <>
          <Tour {...t} tours={tours} setTours={setTours} />
        </>
      ))}
    </div>
  );
}

export default Tours;
