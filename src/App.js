import './App.css';
import Axios from 'axios';
import {React, useState} from "react";


function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const fetchData = () => {
    const APIurl = "https://api.agify.io?name="+name;
    Axios.get(APIurl).then((res) => {
      setPredictedAge(res.data);
    })
  };
  return (
    <div className="App">
      <input 
      placeholder='Ex. Jeshua...'
      onChange={(event) => {
        setName(event.target.value);
      }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <p>Name: {predictedAge?.name}</p>
      <p>Predicted Age: {predictedAge?.age}</p>
      <p>Count: {predictedAge?.count}</p>
    </div>
  );
}

export default App;