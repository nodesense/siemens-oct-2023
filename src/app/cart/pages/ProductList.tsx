import React, {useEffect} from 'react';

interface ProductListProps {
    // from store, using mapStateToProps
    products: any[],
    loading: boolean,
    error: any;

    // from container, mapDispatchToProps
    getProductsBindActionDispatcher: () => void; // function with no parameter
    initProducts:  any;
}

const ProductList: React.FC<ProductListProps> = ({products, loading, 
                                                error, getProductsBindActionDispatcher,
                                                initProducts}) => {
    console.log("PRoductList render", products, loading, error)

    useEffect ( () => {
        console.log("Dispatch getProducts thunk")

        getProductsBindActionDispatcher(); //dispatch thunk to get all products
    }, []); // called only once, like component did mount


    return (
        <div>
            <h2>Products</h2>
            {/* initProducts is bind action method, it automatically dispatch initproducts
                with empty array */}
            <button onClick={ () => initProducts([])}>Empty</button>
            <button onClick={ () => getProductsBindActionDispatcher()}>Get PRoducts</button>
            
            <table>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>+Cart</td>
                </tr>

                { 
                    products.map (product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button >+Cart</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
} 

export default ProductList;