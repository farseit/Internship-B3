"use client";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination = ({ TotalPage, currentPage, setCurrentPage }) => {
  // Handle Next click
  const handleNextClick = () => {
    if (currentPage < TotalPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handle Previous click
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const TotalPages = (total) => {
    let Pages = [];
    for (let i = 1; i <= total; i++) {
      Pages.push(i);
    }
    return Pages;
  };

  const pagesArray = TotalPages(TotalPage);

  return (
    <div className="flex flex-col items-center p-2">
      <div>
        <div className="flex gap-3">
          <div>
            <button
              onClick={handlePrevClick}
              className="h-[40px] bg-[#eeeeee] border-1 px-4 rounded-[5px] md:font-bold md:text-[16px] text-xs"
            >
              <FontAwesomeIcon icon={faAngleLeft} /> Prev
            </button>
          </div>
          {pagesArray.map((item, index) => (
            <button key={index} onClick={() => setCurrentPage(item)}>
              <span
                className={`${
                  item === currentPage
                    ? "bg-primary text-white"
                    : "bg-[#eeeeee]"
                } h-[40px] border px-4 py-2 rounded-[5px] md:font-bold`}
              >
                {item}
              </span>
            </button>
          ))}
          <button
            onClick={handleNextClick}
            className="h-[40px] bg-[#eeeeee] border-1 px-3 rounded-[5px] md:font-bold md:text-[16px] text-xs"
          >
            Next <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
