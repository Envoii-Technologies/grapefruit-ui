import React, { useEffect, useState } from 'react';

import { Button, ContentWrapper, PageHeader, PageMenu, Table } from './../../';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './CardOverview.scss';

export const CardOverview = ({ userData, userMenu, cardsData }) => {
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({});

    const filterOptions = [
        { keyName: 'released', label: 'Freigegeben' },
        { keyName: 'version', label: 'Version' },
        { keyName: 'createdBy', label: 'Erstellt von' },
        { keyName: 'updatedBy', label: 'Bearbeitet von' },
    ];

    const handleFilterChange = (content) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...content,
        }));
    };

    function SelectFilter({ data, keyName, onSelectedValue, selectedValue }) {
        // Get all unique values of the specified key
        const uniqueValues = [...new Set(data.map((item) => item[keyName]))];

        const handleSelectChange = (event) => {
            const selectedFilter = { [keyName]: event.target.value };
            onSelectedValue(selectedFilter);
        };

        return (
            <div>
                <label>Select {keyName}:</label>
                <select
                    value={selectedValue[keyName] || ''}
                    name={keyName}
                    onChange={handleSelectChange}
                >
                    <option value="">All</option>
                    {uniqueValues.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    useEffect(() => {
        if (searchInput.length < 2) {
            setSearchTerm('');
        } else {
            setSearchTerm(searchInput);
        }
    }, [searchInput]);

    return (
        <div className="Page">
            <div className="Page__wrapper">
                <PageMenu
                    userData={userData}
                    menuData={userMenu}
                    isMenuExpanded={true}
                    activeMenuItem={'/guides'}
                />
                <div className="Page__wrapper__main">
                    <PageHeader
                        isTransparent={false}
                        hasSearchBar={true}
                        onSearchBarInput={(search) => setSearchInput(search)}
                        title="Karten"
                        onBack={() => alert('[NOT IMPLEMENTED]')}
                        options={[
                            {
                                label: 'Neue Karte',
                                type: 'primary',
                                action: () => alert('[NOT IMPLEMENTED]'),
                            },
                        ]}
                    />
                    <ContentWrapper isFluid={true}>
                        <Table
                            columns={[
                                {
                                    id: 'title',
                                    title: 'Bezeichnung',
                                    sortable: true,
                                },
                                {
                                    id: 'version',
                                    size: '50px',
                                    title: 'Version',
                                    sortable: true,
                                },
                                {
                                    id: 'updatedBy',
                                    size: '200px',
                                    title: 'Bearbeitet von',
                                    sortable: true,
                                },
                                {
                                    id: 'updatedAt',
                                    size: '200px',
                                    title: 'Bearbeitet',
                                    sortable: true,
                                },
                            ]}
                            isSelectable={true}
                            data={cardsData}
                            initialFilters={filters}
                            initialSortedColumn="updatedAt"
                            searchValue={searchTerm}
                            pageSize={10}
                            onFilterClick={() =>
                                setShowFilterMenu(!showFilterMenu)
                            }
                        />
                    </ContentWrapper>
                </div>
                {showFilterMenu && (
                    <div className="Page__wrapper__aside">
                        <div className="Page__wrapper__aside__header">
                            <h3>Filter</h3>
                            <button onClick={() => setShowFilterMenu(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className="Page__wrapper__aside__content">
                            {filterOptions.map((option, index) => (
                                <SelectFilter
                                    key={index}
                                    data={cardsData}
                                    keyName={option.keyName}
                                    label={option.label}
                                    onSelectedValue={(val) => handleFilterChange(val)}
                                    selectedValue={filters}
                                />
                            ))}
                            <Button label="Reset" type="success" onClick={() => setFilters({})} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
