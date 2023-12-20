import React from "react";
import PropTypes from "prop-types";

const CommentContext = React.createContext();

export const CommentProvider = ({ children }) => {
  const [commentData, setCommentData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const state = {
    commentData,
    setCommentData,
    currentPage,
    setCurrentPage,
  };

  return (
    <CommentContext.Provider value={state}>{children}</CommentContext.Provider>
  );
};

CommentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCommentContext = () => {
  const context = React.useContext(CommentContext);
  if (!context) {
    throw new Error("useCommentContext must be used within a CommentProvider");
  }
  return context;
};
