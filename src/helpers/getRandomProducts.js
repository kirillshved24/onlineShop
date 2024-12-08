export const getRandomProducts = (products) => {
    const randomProducts = [];
    const numProducts = 3;

    while (randomProducts.length < numProducts) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const selectedProduct = products[randomIndex];

        // Проверяем, есть ли уже выбранный товар в массиве randomProducts
        const isDuplicate = randomProducts.some((product) => product.id === selectedProduct.id);

        if (!isDuplicate) {
            randomProducts.push(selectedProduct);
        }
    }

    return randomProducts;
};