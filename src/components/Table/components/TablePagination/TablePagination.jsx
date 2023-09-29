import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './TablePagination.scss';

export const TablePagination = ({
    totalPages,
    currentPage: initialPage,
    handlePageChange,
    totalRows,
    ...props
}) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            handlePageChange(nextPage);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            handlePageChange(prevPage);
        }
    };

    return (
        <div className="TablePagination">
            <span className="TablePagination__info">
                {totalRows} rows on {totalPages} pages
            </span>
            <span className='TablePagination__buttons'>
                {currentPage > 1 && (
                    <button
                        onClick={handlePrevPage}
                        className="TablePagination__button"
                    >
                        Previous
                    </button>
                )}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            const page = index + 1;
                            setCurrentPage(page);
                            handlePageChange(page);
                        }}
                        className={`TablePagination__button ${
                            currentPage === index + 1
                                ? 'TablePagination__button--active'
                                : ''
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button
                        onClick={handleNextPage}
                        className="TablePagination__button"
                    >
                        Next
                    </button>
                )}
            </span>
        </div>
    );
};

TablePagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    totalRows: PropTypes.number.isRequired,
};
