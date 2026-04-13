import { createContext, useState } from "react";

export const counterContextObj = createContext();

function ContextProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };
  const DecrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <counterContextObj.Provider value={{ counter, IncrementCounter, DecrementCounter }}>
      {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider;