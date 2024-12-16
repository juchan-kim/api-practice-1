import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

const [endPoint, setEndPoints] = useState('')
const [container, setContainer] = useState([])
const [finalPoint, setFinalPoint] = useState('')

const url = `https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '85de40867emsh41bf704c979fc72p1ad9b9jsn05f19fdd3574',
		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
};

async function fetchMe () {
try {
	const response = await fetch(url, options);
	const result = await response.text();
  const data = JSON.parse(result);
  setContainer(data.d)
} catch (error) {
	console.error(error);
}
}

useEffect(() => {
  fetchMe()
}, [finalPoint])

const submitHandler = (e) => {
  e.preventDefault()
  setFinalPoint(endPoint)
}

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={(e) => setEndPoints(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
      {container.map((item) => {
        return (
          <div>
            <img src={item.i.imageUrl} alt="" />
            <p>{item.l}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
