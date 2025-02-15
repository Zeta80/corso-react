import { useState } from 'react';

function CardForm({addCity}) {
    
        //   imgUrl:"https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
         
    const [formData, setFormData] = useState(
        {
            name: "",
            text: "",
            imgUrl: "",
            isVisited: false
        }
    )
    const handleForm = (e) => {
        e.preventDefault()
        addCity(formData)
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
                    <label htmlFor="name">Città</label>
                    <input type="text" id="Città" name="name" value={formData.name} onChange={handleType}/>
                </div>
                <div>
                    <label htmlFor="text">Descrizione</label>
                    <input type="text" id="text" name="text" value={formData.text} onChange={handleType}/>
                </div>
                <div>
                    <label htmlFor="ImgUrl">Città</label>
                    <input type="text" id="imgUrl" name="imgUrl" value={formData.imgUrl} onChange={handleType}/>
                </div>
                <div>
                    <label htmlFor="isVisited">visitata?</label>
                    <input type="checkbox" id="isVisited" name="isVisited" value={formData.isVisited} onChange={handleType}/>
                </div>
            </div>
            <button onClick={handleForm}>add card</button>
        </form>
      
      
    </>
  )
}
export default CardForm