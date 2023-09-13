import { useState } from 'react'
import './App.css'

import Header from './Components/Header/Header'
import Bottles from './Components/Bottles/Bottles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Water Bottle</h1>
      <Header></Header>
      <Bottles></Bottles>
      {/* <Header></Header> */}
    </>
  )
}

export default App
