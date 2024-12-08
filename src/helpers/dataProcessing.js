import data from '../products(2).json';

// Функция поиска
export const searchProducts = (searchTerm, products) => {
    const nameProduct = searchTerm.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(nameProduct)
    );

    return filteredProducts;
};
// Функция сортировки
export const onSort = (products, type) => {
    switch (type) {
        case 'NAME_ASC':
            products.sort((a, b) => a.name > b.name ? 1 : -1);
            break;
        case 'NAME_DESC':
            products.sort((a, b) => a.name < b.name ? 1 : -1);
            break;
        case 'PRICE_ASC':
            products.sort((a, b) => a.price > b.price ? 1 : -1);
            break;
        case 'PRICE_DESC':
            products.sort((a, b) => a.price < b.price ? 1 : -1);
            break;
    }
};

// Функция фильтрации
const onFilter = (filters, products) => {
    let filteredProducts = [...products];

    if (filters.searchTerm) {
        filteredProducts = searchProducts(filters.searchTerm, filteredProducts);
    }

    if (filters.category) {
        filteredProducts = filteredProducts.filter(product => product.categories.includes(filters.category));
    }

    if (filters.colors.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            filters.colors.includes(product.color)
        );
    }

    if (filters.priceRange) {
        filteredProducts = filteredProducts.filter(product =>
            product.price >= filters.priceRange.min && product.price <= filters.priceRange.max
        );
    }

    return filteredProducts;
};

// Пагинация
export const paginate = (array, pagination) => {
    const startIndex = pagination.page * pagination.itemsPerPage;
    return array.slice(startIndex, startIndex + pagination.itemsPerPage);
};

// Получение продуктов
export const getProducts = (pagination, sortType, filters) => {
    const { products } = data;

    // Фильтрация
    const filteredProducts = onFilter(filters, products);


    // Сортировка
    onSort(filteredProducts, sortType);


    // Пагинация
    const paginatedProducts = paginate(filteredProducts, pagination);

    return {
        products: paginatedProducts,
        total: filteredProducts.length,
        totalPages: Math.ceil(filteredProducts.length / pagination.itemsPerPage)
    };
};

// Получение информации для фильтров
export const getFilterInfo = () => {
    const { products } = data;
    const info = {
        categories: [],
        colors: [],
        priceRange: { min: Infinity, max: -Infinity },
    };

    products.forEach(product => {
        product.categories.forEach(category => {
            if (!info.categories.includes(category)) {
                info.categories.push(category);
            }
        });

        if (!info.colors.includes(product.color)) {
            info.colors.push(product.color);
        }

        if (product.price < info.priceRange.min) {
            info.priceRange.min = product.price;
        }
        if (product.price > info.priceRange.max) {
            info.priceRange.max = product.price;
        }
    });

    return info;
};