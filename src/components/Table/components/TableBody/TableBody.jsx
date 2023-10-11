import React from 'react';
import PropTypes from 'prop-types';

import './TableBody.scss';
import { Button } from '../../../Button';
import { faEllipsisV, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { PopOver } from '../../../PopOver';

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
                                width: !column.size
                                    ? '70%'
                                    : column.size > 50
                                    ? column.size
                                    : 50,
                                minWidth: '150px',
                            }}
                            className={`TableBody__cell TableBody__cell--${column.id}`}
                        >
                            {row[column.id]}
                        </td>
                    ))}
                    <td>
                        <PopOver
                            position="bottom-right"
                            content={
                                <>
                            <Button
                                label="Bearbeiten"
                                icon={faPenToSquare}
                                onClick={() => alert("[NOT IMPLEMENTED]")}
                            />
                            <Button
                                label="Archivieren"
                                icon={faTrashCan}
                                type="error"
                                onClick={() => alert("[NOT IMPLEMENTED]")}
                            />
                        </>
                            }
                        >
                            <Button type="secondary" icon={faEllipsisV} />
                        </PopOver>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};
