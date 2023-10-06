import React, {useMemo} from 'react';

interface CartSummaryProps {
    amount: number;
    totalItems: number;
}

function calculateDiscount(amount: number, totalItems: number) {
    console.log("calculateDiscount called for ", amount, totalItems)

    if (totalItems <= 2) return amount; // 0 discount
    if (totalItems <= 4) return amount * .98; // 2 % discount
    
    return amount * .95; // 5% discount
}

const CartSummary = ({amount, totalItems}: CartSummaryProps) => {
    console.log('CartSummary render', amount, totalItems)

    // const discount = calculateDiscount(amount, totalItems)
    // console.log( "Discount is ", discount)

    const cachedDiscount = useMemo(() => calculateDiscount(amount, totalItems), 
                                        [amount, totalItems])
    console.log( "Discount is ", cachedDiscount)

    return (
        <div>
            <h2>Summary</h2>
            <p>Amount {amount}</p>
            <p>Items {totalItems}</p>
            <p>Discounted price {cachedDiscount}</p>
        </div>
    )
}

CartSummary.defaultProps = {
    amount:0,
    totalItems: 0
}

export default CartSummary;