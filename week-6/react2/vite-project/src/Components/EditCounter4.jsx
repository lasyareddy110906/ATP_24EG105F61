import {useContext} from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
function EditCounter4() {
  
const {counter, IncrementCounter, DecrementCounter}=useContext(counterContextObj)
  return (
    
    <div className='border-2 text-center p-1.5 gap-2 mt-4'>
      <h1 className="text-xl font-semibold">Counter 4</h1>
      <h1 className="text-2xl font-bold text-center">{counter}</h1>
      <div  className='flex justify-center gap-4'>
      <button onClick={IncrementCounter} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
        +
      </button>
      <button onClick={DecrementCounter} className="bg-blue-500 text-white px-4 py-2 rounded">
        -
      </button>
      </div>
    </div>
  )
}
  

export default EditCounter4