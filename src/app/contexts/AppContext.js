'use client';

import { createContext, useState, useContext } from 'react';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [userResponses, setUserResponses] = useState([]);

  const handleSetUserResponses = (question, answer) => {
    const questionExists = userResponses.find(
      (response) => response.question.title === question.title
    );

    if (questionExists) {
      setUserResponses((prevResponses) =>
        prevResponses.map((response) =>
          response.question.title === question.title
            ? { ...response, answer }
            : response
        )
      );
    } else {
      setUserResponses((prevResponses) => [
        ...prevResponses,
        { question, answer },
      ]);
    }
  };

  const selectedAnswer = (question, answer) => {
    return userResponses.some(
      (response) =>
      response.question.title === question.title &&
      response.answer === answer
    );
  }

  const totalResponses = userResponses.length;

  return (
    <AppContext.Provider
      value={{
        userResponses,
        totalResponses,
        handleSetUserResponses,
        selectedAnswer
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;
