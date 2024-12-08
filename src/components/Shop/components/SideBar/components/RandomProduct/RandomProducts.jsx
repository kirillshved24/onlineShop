import data from '../../../../../../products(2).json'
import { getRandomProducts } from '../../../../../../helpers/getRandomProducts'
import sale from '../../../../../../icons/sale.svg'
import { useState } from 'react';
export const RandomProducts = () => {

    const [randomProducts] = useState(() => {
        const productList = data.products;

        return getRandomProducts(productList);
    })

    return (
        <>
            <div className='randomProducts'>
                <div className='signContainer'>
                    <p className='titleAccent'>Reviewed By You</p>
                    <span className='lineAll'></span>
                </div>
                {randomProducts.map(product => (
                    <div key={product.id} className='productRandom'>
                        <img className='randomImage' src={product.image} alt={product.name} />
                        <div className='infoProduct'>
                            <p className='productName'>{product.name}</p>
                            <p className='productPrice'>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <img src={sale} alt={'sale'} />
        </>
    )
}