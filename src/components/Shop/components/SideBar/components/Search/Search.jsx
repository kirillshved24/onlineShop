import React, { useRef } from 'react';
import search from '../../../../../../icons/search.svg';

export const Search = ({ handleSearch, searchTerm }) => {
    const timeoutRef = useRef(null);

    const handleChange = (event) => {
        const value = event.target.value;
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            handleSearch(value); // Обновляем фильтры
        }, 500);
    };

    return (
        <div className='searchContainer'>
            <div className='searchWrapper'>
                <input
                    className='search'
                    placeholder='Search'
                    type='text'
                    defaultValue={searchTerm}
                    onChange={handleChange}
                />
                <img src={search} alt='search' />
            </div>
            <div className='lineSearch'></div>
        </div>
    );
};