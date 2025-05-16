import { Button } from "@mui/material";
import React from "react";
import { MembersContext } from "./members-context";

export const PaginationButtons: React.FC = () => {
  const { handlePreviousPage, handleNextPage, currentPage, totalPages } =
    React.useContext(MembersContext);
  return (
    <div className="pagination-buttons">
      <Button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        variant={"outlined"}
      >
        Previous
      </Button>
      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        variant={"contained"}
      >
        Next
      </Button>
    </div>
  );
};
