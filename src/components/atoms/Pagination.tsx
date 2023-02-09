import React, { FC } from "react";
import Text from "./Text";

interface Props {
  totalPages: number;
  currentPage: number;
  handleChangePage: (type: string) => void;
}

const Pagination: FC<Props> = ({
  totalPages,
  currentPage,
  handleChangePage,
}) => {
  return (
    <div className="flex-none h-min flex items-center px-4 py-2 bg-white shadow-2xl rounded-xl w-min mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => handleChangePage("prev")}
        className="mr-4 disabled:text-gray-300"
      >
        Prev
      </button>
      {currentPage !== 1 ? <Text styling="mx-2">{currentPage - 1}</Text> : null}
      <Text styling="rounded-full p-2 bg-gray-300">{currentPage}</Text>
      {currentPage + 1 !== totalPages && currentPage + 1 < totalPages ? (
        <div className="mx">{currentPage + 1}</div>
      ) : null}
      {currentPage !== totalPages && totalPages !== 0 ? <Text styling="mx-2">{totalPages}</Text> : null}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handleChangePage("next")}
        className="ml-4 disabled:text-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
