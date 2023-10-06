import React, {memo} from 'react';
import ThemeContext from '../contexts/ThemeContext';

 
interface CartItemProps {
    item: any;
    updateItem: any;
    deleteItem: any;
}

const CartItem: React.FC<CartItemProps> = ({item, updateItem, deleteItem}) => {
    console.log("CartItem render ", item)

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                {item.qty}
            </td>
            <td>
                <ThemeContext.Consumer>
                    {value =>   <span style = { {color: value}}>{item.price * item.qty}</span> }
                </ThemeContext.Consumer>
               
            
            </td>
            <td>
                <button onClick={ () => updateItem(item.id, item.qty + 1)} >+1</button>
                <button  onClick={ () => updateItem(item.id, item.qty - 1)}  >-1</button>
            </td>
            <td>
            <button  onClick={ () => deleteItem(item.id) } >X</button>
            </td>
        </tr>
    )
}

//export default CartItem;
export default memo(CartItem);