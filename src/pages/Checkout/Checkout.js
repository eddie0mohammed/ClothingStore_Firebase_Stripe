
import React from 'react';

import styles from './Checkout.module.scss';

import {connect} from 'react-redux';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';


class Checkout extends React.Component{


    renderCartItems = () => {
        return this.props.cartItems.map(elem => {
            return <CheckoutItem key={elem.id} item={elem}/>
        })
    }

    render(){

        const cartTotal = this.props.cartItems.reduce((acc, elem) => {
            return acc + (elem.price * elem.quantity)
        }, 0);
        console.log(cartTotal);

        return (
            <div className={styles.checkoutPage}>

                <div className={styles.checkoutHeader}>

                    <div className={styles.headerBlock}>
                        <span>Product</span>
                    </div>

                    <div className={styles.headerBlock}>
                        <span>Description</span>
                    </div>

                    <div className={styles.headerBlock}>
                        <span>Quantity</span>
                    </div>

                    <div className={styles.headerBlock}>
                        <span>Price</span>
                    </div>

                    <div className={styles.headerBlock}>
                        <span>Remove</span>
                    </div>
                </div>

                {
                    this.renderCartItems()
                }

                <div className={styles.total}>
                    <span>TOTAL: ${cartTotal}</span>
                </div>

                <div style={{color: 'red', margin: '50px 0'}}>
                    <p>Please use the following text credit card for payments</p>
                    <p>4242&nbsp;4242&nbsp;4242&nbsp;4242 --- exp: 01/21 --- cvv: 123</p>
                </div>

                <div style={{marginLeft: 'auto'}}>
                    <StripeButton price={cartTotal}/>
                </div>

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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);