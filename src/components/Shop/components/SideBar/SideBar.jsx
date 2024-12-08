import React, { useEffect, useState } from 'react';
import { FilterElements } from './components/FilterElements/FilterElements';
import { Search } from './components/Search/Search';
import { RandomProducts } from './components/RandomProduct/RandomProducts';
import { getFilterInfo } from '../../../../helpers/dataProcessing';

export const SideBar = ({ filters, setFilters, fetchProducts }) => {
    const [infoForFilters, setInfoForFilters] = useState({});
    const [localFilters, setLocalFilters] = useState(filters);

    useEffect(() => {
        setLocalFilters(filters); // синхронизация localFilters с filters при монтировании
    }, [filters]);

    const handleSearch = (term) => {
        const newFilters = { ...localFilters, searchTerm: term };
        setLocalFilters(newFilters);
        setFilters(newFilters); // Обновляем фильтры в Shop
    };

    const handleChangeCategory = (category) => {
        setLocalFilters((prevFilters) => ({ ...prevFilters, category }));
    };

    const handleColorSelect = (e) => {
        const color = e.target.value;
        setLocalFilters((prevFilters) => {
            const newColors = prevFilters.colors.includes(color)
                ? prevFilters.colors.filter((c) => c !== color)
                : [...prevFilters.colors, color];
            return { ...prevFilters, colors: newColors };
        });
    };

    const handlePriceRangeChange = (range) => {
        setLocalFilters((prevFilters) => ({ ...prevFilters, priceRange: range }));
    };

    useEffect(() => {
        const info = getFilterInfo();
        if (info.priceRange) {
            setLocalFilters((prevFilters) => ({
                ...prevFilters,
                priceRange: { min: info.priceRange.min, max: info.priceRange.max }
            }));
        }
        setInfoForFilters(info);
    }, []);

    const applyFilters = () => {
        setFilters(localFilters);
        fetchProducts(localFilters); // Вызываем fetchProducts с новыми фильтрами при применении
    };

    return (
        <>
            {infoForFilters && (
                <div className='sidebar'>
                    <Search handleSearch={handleSearch} searchTerm={localFilters.searchTerm} />
                    <FilterElements
                        infoForFilters={infoForFilters}
                        selectedCategory={localFilters.category}
                        onChangeCategory={handleChangeCategory}
                        onColorSelect={handleColorSelect}
                        selectedColors={localFilters.colors}
                        priceRange={localFilters.priceRange}
                        setPriceRange={handlePriceRangeChange}
                        applyFilters={applyFilters}
                    />
                    <RandomProducts />
                </div>
            )}
        </>
    );
};