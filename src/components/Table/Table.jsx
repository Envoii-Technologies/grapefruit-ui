import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Table.scss'; // Import your CSS stylesheet

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

import { TableHeader, TableBody, TablePagination } from './components';

export function Table({
    className,
    columns,
    data,
    initialSortedColumn,
    initialFilters,
    onFilterClick,
    pageSize,
    isSelectable,
    searchValue,
    onRowSelection,
    selectedRows: externalSelectedRows,
    ...props
}) {
    const [sortedColumn, setSortedColumn] = useState(initialSortedColumn);
    const [sortOrder, setSortOrder] = useState(initialSortedColumn ? 'asc' : 'desc');
    const [selectedRows, setSelectedRows] = useState(externalSelectedRows || {});
    const [selectAll, setSelectAll] = useState(false);
    const [columnFilters, setColumnFilters] = useState(initialFilters || {});
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (initialSortedColumn && sortedColumn === null) {
            setSortedColumn(initialSortedColumn);
        }
    }, [initialSortedColumn, sortedColumn]);

    useEffect(() => {
        if (initialFilters) {
            setColumnFilters(initialFilters);
        }
    }, [initialFilters]);

    useEffect(() => {
        if (externalSelectedRows) {
            setSelectedRows(externalSelectedRows);
            setSelectAll(Object.keys(externalSelectedRows).length === data.length);
        }
    }, [externalSelectedRows, data]);

    const applyFilters = (dataToFilter) => {
        let filteredData = [...dataToFilter];

        if (searchValue) {
            filteredData = filteredData.filter((row) =>
                columns.some((column) => {
                    const cellValue = row[column.id];
                    if (typeof cellValue === 'string') {
                        return cellValue
                            .toLowerCase()
                            .includes(searchValue.toLowerCase());
                    } else if (typeof cellValue === 'number') {
                        return cellValue.toString().includes(searchValue);
                    }
                    return false;
                })
            );
        }

        Object.keys(columnFilters).forEach((columnId) => {
            const filterValue = columnFilters[columnId];
            if (filterValue !== '') {
                filteredData = filteredData.filter((row) => {
                    const cellValue = row[columnId];
                    if (typeof cellValue === 'number') {
                        return cellValue === Number(filterValue);
                    }
                    return String(cellValue) === filterValue;
                });
            }
        });

        return filteredData;
    };

    const toggleRowSelection = (rowId) => {
        const updatedSelectedRows = { ...selectedRows };
        updatedSelectedRows[rowId] = !updatedSelectedRows[rowId];
        setSelectedRows(updatedSelectedRows);
        if (onRowSelection) {
            onRowSelection(updatedSelectedRows);
        }
    };

    const toggleSelectAll = () => {
        const updatedSelectedRows = {};
        if (!selectAll) {
            data.forEach((row) => {
                updatedSelectedRows[row.id] = true;
            });
        }
        setSelectedRows(updatedSelectedRows);
        if (onRowSelection) {
            onRowSelection(updatedSelectedRows);
        }
        setSelectAll(!selectAll);
    };

    const isRowSelected = (rowId) => selectedRows[rowId];

    const handleSort = (columnId) => {
        const clickedColumn = columns.find((column) => column.id === columnId);
        if (clickedColumn?.sortable) {
            if (sortedColumn === columnId) {
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            } else {
                setSortedColumn(columnId);
                setSortOrder('asc');
            }
        }
    };

    const sortedData = [...data].sort((a, b) => {
        if (sortedColumn) {
            if (sortOrder === 'asc') {
                return a[sortedColumn] < b[sortedColumn] ? -1 : 1;
            } else {
                return a[sortedColumn] > b[sortedColumn] ? -1 : 1;
            }
        }
        return 0;
    });
    
    const handleFilterClick = () => {
        if (onFilterClick) {
            onFilterClick({
                searchText: searchValue,
                columnFilters,
                sortedColumn,
                sortOrder,
            });
        }
    };

    const filteredData = applyFilters(sortedData);
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalTableWidth = columns.reduce((totalWidth, column) => {
        return totalWidth + parseInt(column.size, 10);
    }, 0);

    return (
        <div
            className={`TableContainer ${
                className !== undefined ? className : ''
            }
        `}
        >
            <div className='TableContainer__menu'>
                <button onClick={handleFilterClick}><FontAwesomeIcon icon={faSliders} /> Filter</button>
            </div>
            {paginatedData.length === 0 ? (
                <p className='Table__no__rows'>No Content found.</p>
            ) : (
                <div className="TableWrapper">
                    <div className="TableRows">
                        <table
                            className="Table"
                            style={{ width: totalTableWidth + 'px' }}
                        >
                            <TableHeader
                                columns={columns}
                                sortedColumn={sortedColumn}
                                sortOrder={sortOrder}
                                handleSort={handleSort}
                                selectAll={selectAll}
                                toggleSelectAll={toggleSelectAll}
                                isSelectable={isSelectable}
                            />
                            <TableBody
                                columns={columns}
                                data={data}
                                paginatedData={paginatedData}
                                isRowSelected={isRowSelected}
                                toggleRowSelection={toggleRowSelection}
                                isSelectable={isSelectable}
                            />
                        </table>
                    </div>
                    {totalPages > 1 && (
                        <TablePagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                            totalRows={filteredData.length}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

Table.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            size: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    data: PropTypes.array,
    initialSortedColumn: PropTypes.string,
    initialFilters: PropTypes.object,
    onFilterClick: PropTypes.func,
    pageSize: PropTypes.number,
    searchValue: PropTypes.string,
    onRowSelection: PropTypes.func,
    selectedRows: PropTypes.object,
    isSelectable: PropTypes.bool,
};

Table.defaultProps = {
    className: undefined,
    columns: [],
    data: [],
    initialSortedColumn: 'id',
    pageSize: 5,
    isSelectable: false
};
