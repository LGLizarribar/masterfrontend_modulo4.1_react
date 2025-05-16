import React from "react";
import { MembersContext } from "./members-context";

export const PaginationButtons: React.FC = () => {
  const { handlePreviousPage, handleNextPage, currentPage, totalPages } =
    React.useContext(MembersContext);
  return (
    <div className="pagination-buttons">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
