import { useState } from 'react'
import TextoEstilizado from './TextoEstilizado.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <TextoEstilizado />
      </div>

    </>
  )
}

export default App
