import { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  function fetchTours() {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    fetchTours();
  }, []);
  console.log(tours);

  return (
    <>
      <h1 id="heading">Our Tours</h1>
      {isLoading ? <Loading /> : <Tours tours={tours} setTours={setTours} />}
      {tours.length == 0 && !isLoading && (
        <div className="rf">
          <h4>No Tours Left</h4>
          <button id="refresh" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      )}
    </>
  );
};
export default App;
