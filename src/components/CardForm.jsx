import { useState } from 'react';

function CardForm({addCity}) {
             
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
                    <input className='bg-amber-100' type="text" id="Città" name="title" value={formData.title} onChange={handleType}/>
                </div>
                <div>
                    <label >Descrizione</label>
                    <input className='bg-amber-100' type="text" id="text" name="text" value={formData.text} onChange={handleType}/>
                </div>
                <div>
                    <label >immagine url</label>
                    <input className='bg-amber-100' type="text" id="imgUrl" name="imgUrl" value={formData.imgUrl} onChange={handleType}/>
                </div>
                <div>
                    <label >visitata?</label>
                    <input className='bg-amber-100' type="checkbox" id="isVisited" name="isVisited" value={formData.isVisited} onChange={handleType}/>
                </div>
            </div>
            <button onClick={handleForm}>add card</button>
        </form>
      
      
    </>
  )
}
export default CardForm