import { useState } from 'react';
import './App.css';
import getData from './getData';


 function App() {
  const [data, setData] = useState([]);
  const workingWithData = async () => {
    const obj = await getData();
    // console.log(obj)
    setData(obj);
  }
  workingWithData()
  return (
    <div>
      {console.log("returni mej enq",data)}
      datafg = {data}
    </div>
  );
}

export default App;
