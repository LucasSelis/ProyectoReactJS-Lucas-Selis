import React, { useState } from "react";


function ItemCount() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>El contador está a {count}</span>
      <button onClick={() => setCount(count + 1)}>Incrementar contador</button>
      <button onClick={() => setCount(count - 1)}>decrementar contador</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}


export default ItemCount