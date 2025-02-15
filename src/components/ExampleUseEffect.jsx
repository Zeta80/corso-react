import { useState, useEffect } from 'react';


function ExampleUseEffect({cities}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    document.title = `${count} times`;
    console.log("ciao")
  } , [count, cities]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default ExampleUseEffect;