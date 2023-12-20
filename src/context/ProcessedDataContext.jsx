import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ProcessedDataContext = createContext();

export const ProcessedDataProvider = ({ children }) => {
  const [processedData, setProcessedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const paginate = (array, page, perPage) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return array.slice(start, end);
  };

  const value = {
    processedData,
    setProcessedData,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    getCurrentPageData: () =>
      paginate(processedData, currentPage, itemsPerPage),
  };

  return (
    <ProcessedDataContext.Provider value={value}>
      {children}
    </ProcessedDataContext.Provider>
  );
};

ProcessedDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProcessedDataContext = () => {
  return useContext(ProcessedDataContext);
};
