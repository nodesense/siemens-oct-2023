import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import { addItem } from '../state/reducers/cartReducer';

import axios from 'axios';


interface ProductListProps {
    // from store, using mapStateToProps
    products: any[],
    loading: boolean,
    error: any;

    // from container, mapDispatchToProps
    getProductsBindActionDispatcher: (axiosParams: any) => void; // function with no parameter
    initProducts:  any;
}

const ProductList: React.FC<ProductListProps> = ({products, loading, 
                                                error, getProductsBindActionDispatcher,
                                                initProducts}) => {
    console.log("PRoductList render", products, loading, error)
    
    // products, loading, error are from container component, from store
    // however amount is taken from store using useSelector without container component
    // using redux/toolkit, we can avoid writing container component 
    const amount = useSelector( (state:any) => state.cart.amount)
    // you can also get products data
    // const productsList = useSelector( (state: any) => state.ps.products)
    
    const dispatch = useDispatch();

    const addItemToCart = (product: any) => {
        const item = {id: product.id, 
                     name: product.name,
                     price: product.price,
                     qty: 1
                    }
        
        dispatch( addItem ( {item}))            
    }

    useEffect ( () => {
        console.log("Dispatch getProducts thunk")

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const axiosParams = {cancelToken: source.token }

        getProductsBindActionDispatcher(axiosParams); //dispatch thunk to get all products

        // componentWillunmount
        return () => {
            // called to clean up pending calls, stop timer
            console.log("PRoductList unmount effect")
            source.cancel("leaving page") //
        }
    }, []); // called only once, like component did mount


    return (
        <div>
            <h2>Products</h2>
            {/* initProducts is bind action method, it automatically dispatch initproducts
                with empty array */}
            <button onClick={ () => initProducts([])}>Empty</button>
            {/* <button onClick={ () => getProductsBindActionDispatcher({})}>Get PRoducts</button> */}
            
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
                            <td><button onClick={ () => addItemToCart (product)} >+Cart</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
} 

export default ProductList;