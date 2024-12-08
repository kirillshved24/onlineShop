import { searchProducts } from './dataProcessing';
import data from '../products(2).json';

describe('Функция поиска searchProducts', () => {
    const { products } = data;

    test('Поиск с пустым запросом возвращает все продукты', () => {
        const searchTerm = '';
        const result = searchProducts(searchTerm, products);

        expect(result).toEqual(products);
    });

    test('Поиск по полному совпадению имени продукта', () => {
        const searchTerm = 'Classic White T-Shirt';
        const result = searchProducts(searchTerm, products);

        const expectedProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        expect(result).toEqual(expectedProducts);
    });

    test('Поиск по частичному совпадению имени продукта', () => {
        const searchTerm = 'Shirt';
        const result = searchProducts(searchTerm, products);

        const expectedProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        expect(result).toEqual(expectedProducts);
    });

    test('Поиск с регистронезависимостью', () => {
        const searchTerm = 'classic white t-shirt';
        const result = searchProducts(searchTerm, products);

        const expectedProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        expect(result).toEqual(expectedProducts);
    });

    test('Поиск по отсутствующему продукту возвращает пустой массив', () => {
        const searchTerm = 'Non-existent Product';
        const result = searchProducts(searchTerm, products);

        expect(result).toEqual([]);
    });
});