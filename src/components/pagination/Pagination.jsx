const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    const visiblePages = 5; // Number of visible pages

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      const halfVisiblePages = Math.floor(visiblePages / 2);
      const startPage = Math.max(1, currentPage - halfVisiblePages);
      const endPage = Math.min(totalPages, startPage + visiblePages - 1);

      if (startPage > 1) {
        pages.push(renderPageButton(1));
        if (startPage > 2) {
          pages.push(renderEllipsis());
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(renderPageButton(i));
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push(renderEllipsis());
        }
        pages.push(renderPageButton(totalPages));
      }
    }

    return pages;
  };

  const renderPageButton = (page) => (
    <button
      key={page}
      className={`join-item btn btn-sm ${
        currentPage === page ? "btn-active" : ""
      }`}
      onClick={() => onPageChange(page)}
    >
      {page}
    </button>
  );

  const renderEllipsis = () => <span key="ellipsis"></span>;

  return (
    <div className="join">
      <button
        className={`join-item btn btn-sm ${
          currentPage === 1 ? "btn-disabled" : ""
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          dataSlot="icon"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      {renderPageNumbers()}
      <button
        className={`join-item btn btn-sm ${
          currentPage === totalPages ? "btn-disabled" : ""
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          dataSlot="icon"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
