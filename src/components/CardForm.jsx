function CardForm({addCity}) {
    const city = {name: 'New York',
         isVisited: false,
          imgUrl:"https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          text: 'card fatta con form card'
        }
    const handleCity = () => {
        addCity(city)
    }
  
  return (
    <>
      
        <button onClick={handleCity}>add card</button>
      
    </>
  )
}
export default CardForm