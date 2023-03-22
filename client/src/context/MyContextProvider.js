import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({});

  const handleUserInput = (data) => {
    setUserInput({ ...userInput, ...data });
  };

  return (
    <MyContext.Provider value={{ userInput, handleUserInput }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
