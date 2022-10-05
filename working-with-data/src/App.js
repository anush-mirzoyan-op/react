import "./App.css";
import getData from "./getData.js";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const obj = await getData();
      setData(obj);
    })();
  }, []);

  let userId = +prompt()

  return (
    <div className="main-div">
      <div className="navbar">
        User Infromation
        </div>
      <div className="card">
        user name = {data.length && data[userId].username}
        <br></br>
        posts = {data.length && data[0].company.catchPhrase}
      </div>
    </div>
  );
}

export default App;
