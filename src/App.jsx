import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

const [endPoint, setEndPoints] = useState('');

const search = async () => {
  /*
  const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '85de40867emsh41bf704c979fc72p1ad9b9jsn05f19fdd3574',
		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

useEffect(() => {
  search()
}, [])
*/
}

  return (
    <div className="App">
      <form>
        <input type="text" value={endPoint} onChange={(e) => setEndPoints(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default App
