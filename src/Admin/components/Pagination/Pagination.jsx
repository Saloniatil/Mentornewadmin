import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ current, total, pagination }) => {
    const handlePagination = (page) => {
        console.log("page", page)
        pagination(page);
    };

    const getPaginationNumbers = () => {
        if (total < 7) {
            return Array.from({ length: total }, (_, i) => i + 1);
        } else if (current > 4 && current + 2 < total) {
            return [1, "...", current - 1, current, current + 1, "...", total];
        } else if (current > 4 && current + 2 >= total) {
            return [1, "...", total - 3, total - 2, total - 1, total];
        } else {
            return [1, 2, 3, 4, 5, "...", total];
        }
    };

    return (
        <div className="pagsi_box">
            <nav aria-label="Page navigation example ">
                <ul className="pagination">
                    {/* Previous Button */}
                    <li className="page_num">
                        <Button
                            type="button"
                            disabled={current === 1}
                            onClick={() => handlePagination(current - 1)}
                            className="Prev_pas"
                        >
                            Prev
                        </Button>
                    </li>
                    {/* Page Numbers */}
                    {getPaginationNumbers().map((page, i) => (
                        <li
                            key={i}
                            className={`page-item ${current === page ? "active_page" : "page_num"
                                } px-3 py-1 rounded-md`}
                        >
                            {page === "..." ? (
                                <span className="dot_page">...</span>
                            ) : (
                                <button
                                    className="page_button"
                                    onClick={() => handlePagination(page)}
                                >
                                    {page}
                                </button>
                            )}
                        </li>
                    ))}
                    {/* Next Button */}
                    <li className="page_num">
                        <Button
                            className="Next_pas"
                            type="button"
                            disabled={current === total}
                            onClick={() => handlePagination(current + 1)}
                        >
                            Next
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
