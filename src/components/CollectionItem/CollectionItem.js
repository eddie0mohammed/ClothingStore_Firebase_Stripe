import React from 'react';

import styles from './CollectionItem.module.scss';

import Button from '../Button/Button';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';

class CollectionItem extends React.Component{


    render(){

        return (
            <div className={styles.collectionItem}>
                <div className={styles.image} style={{backgroundImage: `url(${this.props.elem.imageUrl})`}}></div>

                <div className={styles.collectionFooter}>
                    <span className={styles.name}>{this.props.elem.name}</span>
                    <span className={styles.price}>{this.props.elem.price}</span>
                </div>

                <Button className={styles.customButton1} inverted="true" onClick={() => this.props.addItem(this.props.elem)}>Add</Button>

            </div>
        )
    }
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(actionCreators.addItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);