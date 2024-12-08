import React from 'react';
import { Categories } from './components/Categories/Categories';
import { Price } from './components/Price/Price';
import { Colors } from './components/Colors/Colors';

export const FilterElements = ({
    infoForFilters,
    selectedCategory,
    onChangeCategory,
    onColorSelect,
    selectedColors,
    priceRange,
    setPriceRange,
    applyFilters
}) => {
    return (
        <>
            <Categories
                categories={infoForFilters.categories || []}
                selectedCategory={selectedCategory}
                onChangeCategory={onChangeCategory}
            />
            <Price
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
            <Colors
                colors={infoForFilters.colors || []}
                selectedColors={selectedColors}
                onColorSelect={onColorSelect}
            />
            <button className='buttonFilter' onClick={applyFilters}>Apply Filters</button>
        </>
    );
};