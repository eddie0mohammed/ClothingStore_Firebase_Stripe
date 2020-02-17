
import React from 'react';

import styles from './CartDropdown.module.scss';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';
import * as actionCreators from '../../Redux/Actions/actionCreators';


class CartDropdown extends React.Component{

    renderCartItems = () => {

        return this.props.cartItems.length ? 
            this.props.cartItems.map(elem => {
                return <CartItem key={elem.id} item={elem}/>
            })
            :
            <span className={styles.emptyMessage}>Empty</span>
    }

    checkoutClicked = () => {
        this.props.history.push('/checkout');
        this.props.toggleCart();
    }

    

    render(){

        return (

            <div className={styles.cartDropdown} > 

                <div className={styles.cartItems}>
                    {this.renderCartItems()}
                </div>
                <Button onClick={this.checkoutClicked}>Checkout</Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(actionCreators.toggleCart())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));