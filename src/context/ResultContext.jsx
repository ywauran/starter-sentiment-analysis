import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [resultState, setResultState] = useState({});

  const value = {
    resultState,
    setResultState,
  };

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
};

ResultProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useResultContext = () => {
  return useContext(ResultContext);
};
