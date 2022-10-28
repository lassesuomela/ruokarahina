import axios from "axios";
import { useState } from "react";

import BothStats from "./components/BothStats"
const url = "http://localhost:8080/api/food/";

function App() {

  const [stats, setStats] = useState([]);

  const [blue, setBlue] = useState("");
  const [red, setRed] = useState("");

  const FetchData = (foodName) => {

    axios.get(url + foodName)
    .then(response => {
      if(response.data.status){
        setStats(stats => [...stats.reverse(), response.data.foodStats])
      }else{
        console.log("error: " + response.data.error)
      }
    }).catch(error => {
      console.log(error.message)
      console.log(error.response.data)
    })
  }

  const Fetch = (e) => {

    setStats([])

    e.preventDefault()

    if(!blue || !red){
      return
    }

    FetchData(blue)
    FetchData(red)
  }

  return (
    <div className="container p-4">

      <h2 className="text-center">Ruokarähinä</h2>

    <div className="d-flex justify-content-center pt-3">

      <div className="form-control w-25 ">

        <form className="p-4" onSubmit={Fetch}>

          <label className="form-label" for="blueInput">Sininen puoli</label>
          <input id="blueInput" type="text" className="form-control" placeholder="Sininen puoli" onChange={e => setBlue(e.target.value)} required/>

          <label className="form-label pt-4" for="redInput">Punainen puoli</label>
          <input id="redInput" type="text" className="form-control" placeholder="Punainen puoli" onChange={e => setRed(e.target.value)} required/>

          <div className="pt-4 text-center">
            <button type="submit" className="btn btn-primary">Hae</button>
          </div>
        </form>
      </div>
    </div>

    {
      stats.length === 2 ? <BothStats blueStats={stats[0]} redStats={stats[1]} /> : ""
    }     
    </div>
  );
}

export default App;
