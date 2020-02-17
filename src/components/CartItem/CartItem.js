import React from 'react';

import styles from './CartItem.module.scss';


class CartItem extends React.Component{


    render(){

        return (
            <div className={styles.cartItem}>
                <img src={this.props.item.imageUrl} alt="img"/>
                <div className={styles.itemDetails}>

                    <span className={styles.name}>{this.props.item.name}</span>
                    <span className={styles.price}>{this.props.item.quantity} x ${this.props.item.price}</span>
                </div>

            </div>
        )
    }
}

export default CartItem;