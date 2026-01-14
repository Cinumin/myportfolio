import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
        <h1 id="main_title"> Angela Zhao </h1>
       <a href="https://www.lovethispic.com/uploaded_images/43771-Blossom-Gif.gif?1" target="_blank">
         <img src="https://www.lovethispic.com/uploaded_images/43771-Blossom-Gif.gif?1" className="logo react" alt="React logo" />
       </a>

       <div class="container">
            <div class="column pointer"><a id="link">Hover this!</a></div>
            <div class="column drag"></div>
            <div class="column zoom"></div>
            <div class="column not-allowed"></div>
        </div>
  </div>
)}
  export default App
