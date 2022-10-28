import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://fineli.fi/fineli/api/v1/foods?q=porkkana";

function App() {

  useEffect(() => {
    axios.get(url)
    .then(response => {
      console.log(response)

    }).catch(error => {
      console.log(error.message)
      console.log(error.response.data)
    })
  }, [])

  return (
    <div>test</div>
  );
}

export default App;
