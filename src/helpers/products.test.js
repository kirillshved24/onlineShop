import data from '../products(2).json'
import { getProducts, onSort } from './dataProcessing';

const ITEMS_PER_PAGE = 12;

const pagination = {
    page: 0,
    itemsPerPage: ITEMS_PER_PAGE,
};


const currentSortType = 'PRICE_ASC';

const { products } = data;

describe('Проверяем работу фильтра Colors', () => {
    test('По фильтру Red вернулись товары с цветом Red', () => {

        const currentFilters = {
            searchTerm: '',
            category: '',
            colors: ['Red'],
            priceRange: { min: 20.99, max: 210.99 }
        }


        const info = getProducts(pagination, currentSortType, currentFilters);
        const filteredByRedColor = products.filter((product) => product.color === 'Red')
        onSort(filteredByRedColor, currentSortType)

        expect(info.products).toEqual(filteredByRedColor)
    })
})

describe('Проверяем работу фильтра Colors', () => {
    test('По фильтру Brown,Red,Blue вернулись товары с данными цветами', () => {

        const currentFilters = {
            searchTerm: '',
            category: '',
            colors: ['Red', 'Brown', 'Blue'],
            priceRange: { min: 20.99, max: 210.99 }
        }



        const info = getProducts(pagination, currentSortType, currentFilters);
        const filteredByRedColor = products.filter((product) => product.color === 'Red' || product.color === 'Brown' || product.color === 'Blue')

        onSort(filteredByRedColor, currentSortType)

        const startIndex = pagination.page * pagination.itemsPerPage;
        const slicedProducts = filteredByRedColor.slice(startIndex, startIndex + pagination.itemsPerPage);



        expect(info.products).toEqual(slicedProducts)
    })
})

describe('Проверяем работу фильтра Man', () => {

    test('По фильтру Man вернулись товары с категорией Man', () => {
        const currentFilters = {
            searchTerm: '',
            category: 'Man',
            colors: [],
            priceRange: { min: 20.99, max: 210.99 }
        };

        const info = getProducts(pagination, currentSortType, currentFilters);
        const filteredByCategory = products.filter((product) => product.categories.includes('Man'));

        expect(info.products).toEqual(filteredByCategory.slice(0, ITEMS_PER_PAGE));
    });

    test('По фильтру Woman вернулись товары с категорией Woman', () => {
        const currentFilters = {
            searchTerm: '',
            category: 'Woman',
            colors: [],
            priceRange: { min: 20.99, max: 210.99 }
        };

        const info = getProducts(pagination, currentSortType, currentFilters);
        const filteredByCategory = products.filter((product) => product.categories.includes('Woman'));

        expect(info.products).toEqual(filteredByCategory.slice(0, ITEMS_PER_PAGE));
    });

    test('По фильтру Men,Women,Accessories вернулись товары с данными категориями', () => {
        const currentFilters = {
            searchTerm: '',
            category: '',
            colors: [],
            priceRange: { min: 20.99, max: 210.99 }
        };

        // Фильтруем продукты по категориям: Men, Women, Accessories
        const filteredByCategories = products.filter((product) =>
            product.categories.includes('Men') ||
            product.categories.includes('Women') ||
            product.categories.includes('Accessories')
        );

        onSort(filteredByCategories, currentSortType);

        const startIndex = pagination.page * pagination.itemsPerPage;
        const slicedProducts = filteredByCategories.slice(startIndex, startIndex + pagination.itemsPerPage);


        const info = getProducts(pagination, currentSortType, currentFilters);

        expect(info.products).toEqual(slicedProducts);
    });
});