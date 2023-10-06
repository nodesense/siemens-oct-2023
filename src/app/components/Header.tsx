import React  from 'react';

import {Link, NavLink} from 'react-router-dom';

interface HeaderProps {
    title: string;
}  

export const Header = (props: HeaderProps) => {
    console.log('Header render')
    // PROPS ARE IMMUTABLE
    // error
    //props.title = "welcome";

    // const title = props.title
    // destructring
    const {title} = props;

    return (
        <div>
            <h1>{title}</h1>
            <NavLink to="/" className={"button"} activeClassName='success' exact >Home</NavLink>
            <NavLink to="/products" className={"button"}  activeClassName='success'>Products</NavLink>
            <NavLink to="/redux-cart" className={"button"} activeClassName='success' >ReduxCart</NavLink>
            <NavLink to="/checkout" className={"button"} activeClassName='success' >Checkout</NavLink>
            <NavLink to="/cart" className={"button"} activeClassName='success' >React Cart</NavLink>
            <NavLink to="/about" className={"button"} activeClassName='success' >About</NavLink>
            <Link to="/counter"  >Counter</Link>
            <hr />
        </div>
    )
}


