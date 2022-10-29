import axios from "axios";
import { useState } from "react";

import BothStats from "./components/BothStats";

const url = "http://localhost:8080/api/food/";

function App() {

  const [stats, setStats] = useState([])

  const [blue, setBlue] = useState("")
  const [red, setRed] = useState("")
  
  const [error, setError] = useState("")

  const [isShown, setIsShown] = useState(true)

  const FetchData = (foodName) => {

    axios.get(url + foodName)
    .then(response => {
      if(response.data.status === "success"){
        setStats(stats => [...stats.reverse(), response.data.foodStats])
      }else{
        console.log(response.data.error)
        setError(response.data.error)
      }
    }).catch(error => {
      console.log(error.message)
      console.log(error.response.data)

      setError(error.message)
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

    setIsShown(false)
  }

  const Reset = () => {
    setError("")
    setIsShown(true)
    setStats([])
  }

  return (
    <div className="container p-4">

      <h2 className="text-center pb-4">Ruokarähinä</h2>

      {
        error ? <h4 className="text-center">Error: {error}</h4> : ""
      }

    <div className="d-flex justify-content-center">

      {
        isShown ? <div className="form-control w-25">

        <form className="p-4" onSubmit={Fetch}>

          <label className="form-label" htmlFor="blueInput">Sininen puoli</label>
          <input id="blueInput" type="text" className="form-control" placeholder="Tomaatti" onChange={e => setBlue(e.target.value)} required/>

          <p className="text-center pt-4 mb-0">vs.</p>

          <label className="form-label pt-4" htmlFor="redInput">Punainen puoli</label>
          <input id="redInput" type="text" className="form-control" placeholder="Paprika" onChange={e => setRed(e.target.value)} required/>

          <div className="pt-4 text-center">
            <button type="submit" className="btn btn-dark">Hae</button>
          </div>
        </form>
      </div>
      : ""
      }
    </div>

    {
      stats.length === 2 ?
      <div className="pb-2">
          <BothStats blueStats={stats[0]} redStats={stats[1]} />
        </div>
        : ""
    }

      <div className="text-center">
      {
        !isShown ? <button className="btn btn-dark" onClick={Reset}>Reset</button> : ""
      }
      </div>
    </div>
  );
}

export default App;
