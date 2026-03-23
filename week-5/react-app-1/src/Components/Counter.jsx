import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0)
    const increment=()=>
    {
        setCount(count+1)
    }
    const decrement=()=>
    {
        setCount(count-1)
    }
    return(
    <div className="mx-12 my-10 text-center text-3xl bg-blue-400">
        <h1 className="text-4xl text-center">Count:{count}</h1>
        <button className=" p-2 mx-2 bg-pink-300 "onClick={increment}>+</button>
        <button className="p-2 bg-pink-400"onClick={decrement}>-</button>
    </div>
    )
}

export default Counter