
import React from 'react';

import styles from './CheckoutItem.module.scss';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';
 
class CheckoutItem extends React.Component{

    render(){

        return (
            <div className={styles.checkoutItem}>

                <div className={styles.imageContainer}>
                    <img src={this.props.item.imageUrl} alt="itm"/>
                </div>

                <span className={styles.name}>{this.props.item.name}</span>
                <span className={styles.quantity}>
                    <div className={styles.arrow} onClick={() => this.props.removeSingleItem(this.props.item)}>&#10094;</div>
                        <div className={styles.value}>{this.props.item.quantity}</div>
                    <div className={styles.arrow} onClick={() => this.props.addItem(this.props.item)}>&#10095;</div>

                </span>
                <span className={styles.price}>${this.props.item.price}</span>
                <span className={styles.removeButton} onClick={() => this.props.removeItem(this.props.item.id)}>&#10005;</span>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        removeItem: (id) => dispatch(actionCreators.removeItem(id)),
        removeSingleItem: (item) => dispatch(actionCreators.removeSingleItem(item)),
        addItem: (item) => dispatch(actionCreators.addItem(item))
         
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);