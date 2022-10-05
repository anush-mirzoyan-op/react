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

  let userId = 5;
  const inputValue = +document.getElementsByClassName(".domTextElement")
console.log(inputValue)
  return (
    <div className="main-div">
      <div>
        <label for="domTextElement">Enter user id </label>
        <input type="text" className="domTextElement" />
      </div>

      <div className="navbar">User Infromation</div>
      <div className="card">
        user naaame = {data.length && data[inputValue]?.username}
        <br></br>
        posts = {data.length && data[0].company.catchPhrase}
      </div>
    </div>
  );
}

export default App;
