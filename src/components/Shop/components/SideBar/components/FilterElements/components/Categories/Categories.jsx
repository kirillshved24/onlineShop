import React from 'react';

export const Categories = ({ categories, selectedCategory, onChangeCategory }) => {
    return (
        <div className='categories'>
            <div className='signContainer'>
                <p className='titleAccent'>Categories</p>
                <span className='lineAll'></span>
            </div>
            {categories.map((category) => (
                <div
                    key={category}
                    className={`category ${selectedCategory === category ? 'selected' : ''}`}
                    onClick={() => onChangeCategory(category)}
                >
                    <span className='dot'></span>
                    {category}
                </div>
            ))}
        </div>
    );
};