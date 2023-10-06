import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../state/actions/product.actions';
import ProductList from '../pages/ProductList';

// helper function, involved by container
// take data from store/state, pass to component as props
export const mapStateToProps = (state: any) => {
    // return list of probs that should be passed to react component ProductList

    console.log("ProductList container mapStateToPRops called", state)

    return {
        //propName: value from state
        products: state.ps.products,
        loading: state.ps.loading,
        error: state.ps.error
    }
}

export const mapDispatchToProps = (dispatch :any, getState:any) => {
    // return list of functions as props to ProductList component
    return {
        // propName: function definition
        getProductsBindActionDispatcher : bindActionCreators(actions.getProducts, dispatch),
        initProducts: bindActionCreators(actions.initProducts, dispatch)
    }
}

// use connect function to create a container
// a container consist of react component, mapStateToPRops, mapDispatchToProps, store

const ProductListContainer = connect(mapStateToProps, mapDispatchToProps) (ProductList)

export default ProductListContainer;