import { useState } from 'react';

function CardForm({addCity}) {
    
        //   imgUrl:"https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
         
    const [formData, setFormData] = useState(
        {
            title: "",
            text: "",
            imgUrl: "",
            isVisited: false
        }
    )
    const handleForm = (e) => {
        e.preventDefault()
        const city = {
            title: formData.title,
            text: formData.text,
            imgUrl: formData.imgUrl,
            isVisited: formData.isVisited
        }
        console.log(city)
        addCity(city)
    }
    const handleType = (e) => {
        const {name, value, type, checked} = e.target
        console.log(name, value, type, checked)
        const newValue = type === "checkbox" ? checked : value
        setFormData({...formData, [name]: newValue})
    }

  
  return (
    <>
        <form action="handleForm">
            <div className="flex flex-col p-4 bg-gray-950">
                <div >
                    <label >Città</label>
                    <input type="text" id="Città" name="title" value={formData.title} onChange={handleType}/>
                </div>
                <div>
                    <label >Descrizione</label>
                    <input type="text" id="text" name="text" value={formData.text} onChange={handleType}/>
                </div>
                <div>
                    <label >Città</label>
                    <input type="text" id="imgUrl" name="imgUrl" value={formData.imgUrl} onChange={handleType}/>
                </div>
                <div>
                    <label >visitata?</label>
                    <input type="checkbox" id="isVisited" name="isVisited" value={formData.isVisited} onChange={handleType}/>
                </div>
            </div>
            <button onClick={handleForm}>add card</button>
        </form>
      
      
    </>
  )
}
export default CardForm