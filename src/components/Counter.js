import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => count > 0 && setCount(count - 1);
    
    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;