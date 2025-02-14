import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='grid grid-cols-4 gap-10'>
        <Card 
          isVisited={true}
          title="Tokyo" 
          imgUrl="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt.
        </Card>
        <Card 
          isVisited={false}
          title="Tokyo" 
          imgUrl="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt.
        </Card>
        <Card 
          isVisited={true}
          title="Tokyo" 
          imgUrl="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt.
        </Card>
        <Card 
          isVisited={false}
          title="Tokyo" 
          imgUrl="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt.
        </Card>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
