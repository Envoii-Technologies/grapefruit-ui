import React, { useEffect, useState } from 'react';

import { ContentWrapper, PageHeader, PageMenu, Table } from './../../';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './CardOverview.scss';

export const CardOverview = ({ userData, userMenu, cardsData }) => {

    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if(searchInput.length < 2)
        {
            setSearchTerm("");
        }
        else
        {
            setSearchTerm(searchInput);
        }
    },[searchInput])

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
                                action: () => alert('[NOT IMPLEMENTED]')
                            },
                        ]}
                    />
                    <ContentWrapper isFluid={true}>
                        <Table 
                            columns={[
                                { id: 'title', title: 'Bezeichnung', sortable: true },
                                { id: 'version', size: '50px', title: 'Version', sortable: true },
                                { id: 'updatedBy', size: '200px', title: 'Bearbeitet von', sortable: true },
                                { id: 'updatedAt', size: '200px', title: 'Bearbeitet', sortable: true },
                            ]}
                            data={
                                cardsData
                            }
                            initialSortedColumn="updatedAt"
                            searchValue={searchTerm}
                            pageSize={10}
                            onFilterClick={() => setShowFilterMenu(!showFilterMenu)}
                        />
                    </ContentWrapper>
                </div>
                {
                    showFilterMenu && 
                    (
                        <div className="Page__wrapper__aside">
                            <div className="Page__wrapper__aside__header">
                                <h3>Filter</h3>
                                <button onClick={() => setShowFilterMenu(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                            <div className="Page__wrapper__aside__content">
                                asdf
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
