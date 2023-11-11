import{ useState } from "react";
import './IncrementANDdecrement.css'

function IncrementANDdecrement () {
    let [count, setCount] = useState(1);
  
    return (
        <div className="center">
      <div className="incrementAndDecrement">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count <= 1 ? 1 : count - 1)}>-</button>
      </div>
    </div>
    )
}

export default IncrementANDdecrement;