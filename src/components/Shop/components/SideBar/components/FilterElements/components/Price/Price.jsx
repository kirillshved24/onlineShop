import React, { useState, useEffect } from 'react';

export const Price = ({ priceRange, setPriceRange }) => {
    const [localMinPrice, setLocalMinPrice] = useState(priceRange.min);
    const [localMaxPrice, setLocalMaxPrice] = useState(priceRange.max);

    useEffect(() => {
        setLocalMinPrice(priceRange.min);
        setLocalMaxPrice(priceRange.max);
    }, [priceRange]);

    const handleMinPriceChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setLocalMinPrice(value);
    };

    const handleMaxPriceChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setLocalMaxPrice(value);
    };

    const handleBlur = () => {
        if (localMinPrice <= localMaxPrice) {
            setPriceRange({ min: localMinPrice, max: localMaxPrice });
        } else {
            setLocalMinPrice(priceRange.min);
            setLocalMaxPrice(priceRange.max);
        }
    };

    return (
        <div className='priceFilter'>
            <div className='signContainer'>
                <p className='titleAccent'>Price</p>
                <span className='lineAll'></span>
            </div>
            <div className='sliderContainer'>
                <input
                    type="number"
                    className='rangeSlider'
                    value={localMinPrice}
                    min={priceRange.min}
                    max={priceRange.max}
                    onChange={handleMinPriceChange}
                    onBlur={handleBlur}
                />
                <input
                    type="number"
                    className='rangeSlider'
                    value={localMaxPrice}
                    min={priceRange.min}
                    max={priceRange.max}
                    onChange={handleMaxPriceChange}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    );
};