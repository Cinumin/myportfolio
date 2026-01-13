import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1 id="welcome"> Hello </h1>
    <a>
      <img src="https://www.lovethispic.com/uploaded_images/43771-Blossom-Gif.gif?1" className="logo react" alt="Flower" />
    </a>
   </div>
  )
}

export default App
