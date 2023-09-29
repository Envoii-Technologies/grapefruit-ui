import React from 'react';
import PropTypes from 'prop-types';

import './TableBody.scss';

export const TableBody = ({
    columns,
    data,
    paginatedData,
    isRowSelected,
    toggleRowSelection,
    isSelectable,
    ...props
}) => {
    return (
        <tbody className="TableBody">
            {paginatedData.map((row) => (
                <tr
                    key={row.id}
                    className={`TableBody__row ${
                        isRowSelected(row.id) ? 'TableBody__row--selected' : ''
                    }`}
                >
                    {isSelectable && (
                        <td className="TableBody__checkbox">
                            <input
                                type="checkbox"
                                onChange={() => toggleRowSelection(row.id)}
                                checked={isRowSelected(row.id)}
                            />
                        </td>
                    )}

                    {columns.map((column) => (
                        <td
                        key={`${row.id}-${column.id}`}
                            style={{
                                width: 
                                !column.size ? "70%" : column.size > 50 ? column.size : 50,
                                minWidth: "150px"
                            }}
                            className={`TableBody__cell TableBody__cell--${column.id}`}
                        >
                            {row[column.id]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
