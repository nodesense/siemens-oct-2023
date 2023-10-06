import React, {memo} from 'react';

import CartItem from './CartItem';
interface CartListProps {
    items: any[];
    updateItem: any;
    deleteItem: any;
}
 

const CartList: React.FC<CartListProps> = ({items, updateItem, deleteItem}) => {
    console.log("CartList render")

    return (
        <table>
           
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Qty</td>
                    <td>Amount</td>
                    <td>+/-</td>
                    <td>X</td>
                </tr>

                {
                    items.map (item => <CartItem item={item} 
                                                 updateItem={updateItem} 
                                                 deleteItem={deleteItem} />)
                }
            </tbody>
        </table>
    )
}

// export default CartList;

export default memo(CartList);