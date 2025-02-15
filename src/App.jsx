import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm'
import ExampleUseEffect from './components/ExampleUseEffect'

function App() {
  const [count, setCount] = useState(0)


const initialCities =[ 
        {
          id:0,
          isVisited:true,
          title:"London" ,
          imgUrl:"https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt.",
        },
        {
          id:1,
          isVisited:false,
          title:"Paris" ,
          imgUrl:"https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt.",
        },
        {
          id:2,
          isVisited:true,
          title:"New York" ,
          imgUrl:"https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt.",
        },
        {
          id:3,
          isVisited:false,
          title:"Tokyo" ,
          imgUrl:"https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt.",
        },
       
]

const [cities, setCities] = useState(initialCities)

const addCitty = (city) => {
  setCities([...cities, city])}

  return (
    <> 
    <ExampleUseEffect cities={cities} />
      <div className='grid grid-cols-4 gap-10'>

      {cities.map((city) => (
          <Card key={city.id} title={city.title} imgUrl={city.imgUrl} isVisited={city.isVisited}>
            {city.text}
          </Card>
        ))}

     

      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <CardForm addCity={addCitty} /> 
      </div>
      
    </>
  )
}

export default App
