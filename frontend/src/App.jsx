import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListaCards from './components/ListaCards/Index.module'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaCards />
    </>
  )
}

export default App
