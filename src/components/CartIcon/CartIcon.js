
import React from 'react';

import styles from './CartIcon.module.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

class CartIcon extends React.Component{


    render(){

        return (
            <div className={styles.cartIcon} onClick={this.props.clicked}>

                <ShoppingIcon className={styles.shoppingIcon}/>
                <span className={styles.itemCount}>{this.props.number}</span>

            </div>
        )
    }
}

export default CartIcon