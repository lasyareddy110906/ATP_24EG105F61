import {createContext,useContext} from 'react'

import {counterContextObj} from './contexts/ContextProvider'
import EditCounter1 from './Components/EditCounter1'
import EditCounter2 from './Components/EditCounter2'
import EditCounter3 from './Components/EditCounter3'
import EditCounter4 from './Components/EditCounter4'

function App() {
  return (
    <div className='bg-'>
        <h1 className='text-center text-2xl font-bold'>App</h1>
        <div className='grid lg:grid-cols-2 gap-4 mt-4'>
            <EditCounter1 />
            <EditCounter2 />
            <EditCounter3 />
            <EditCounter4 />
        </div>
    </div>
  )
}

export default App