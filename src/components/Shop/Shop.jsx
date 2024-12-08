import React, { useState, useEffect } from 'react';
import { SideBar } from './components/SideBar/SideBar';
import { ShowCase } from './components/ShowCase/ShowCase';
import { getProducts } from '../../helpers/dataProcessing';

const ITEMS_PER_PAGE = 12;

export const Shop = ({ updateFavoritesCount, updateCartCount }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [sortType, setSortType] = useState('PRICE_ASC');
    const [paginationInfo, setPaginationInfo] = useState(null);

    const [filters, setFilters] = useState({
        searchTerm: '',
        category: '',
        colors: [],
        priceRange: { min: 20.99, max: 210.99 }
    });

    const fetchProducts = (currentFilters = filters, currentPage = page, currentSortType = sortType) => {

        const pagination = {
            page: currentPage,
            itemsPerPage: ITEMS_PER_PAGE,
        };

        const info = getProducts(pagination, currentSortType, currentFilters);

        setProducts(info.products);
        setPaginationInfo({ total: info.total, totalPages: info.totalPages });
    };

    const applyFilters = (newFilters) => {
        setFilters(newFilters);
        setPage(0); // Сброс на первую страницу при применении фильтров
    };

    useEffect(() => {
        fetchProducts(filters, page, sortType);
    }, [filters, page, sortType]);

    return (
        <div className='sideBlock'>
            <SideBar
                filters={filters}
                setFilters={applyFilters}
                fetchProducts={fetchProducts}
            />
            <ShowCase
                products={products}
                updateFavoritesCount={updateFavoritesCount}
                updateCartCount={updateCartCount}
                changeSortType={setSortType}
                sortType={sortType}
                countOfProducts={paginationInfo?.total}
                changePage={setPage}
                totalPages={paginationInfo?.totalPages}
                currentPage={page}
            />
        </div>
    );
};