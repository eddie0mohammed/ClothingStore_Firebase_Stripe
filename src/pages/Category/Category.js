
import React from 'react';

import styles from './Category.module.scss';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import {connect} from 'react-redux';


class Category extends React.Component{


    renderItems = (selectedData) => {
        return selectedData.items.map(elem => {
            
            return (
                <CollectionItem key={elem.id} elem={elem} />
            )
            
        })
        
    } 

    render(){

        // console.log(this.props.match.params.categoryId);
        // console.log(this.props.collections);
        const selectedData = this.props.collections.filter(elem => elem.routeName === this.props.match.params.categoryId)[0];
        

        return (
            <div className={styles.collectionPage}>   

            <h2 className={styles.title}>{selectedData.title}</h2>

            <div className={styles.items}>
                {this.renderItems(selectedData)}
            </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collections: state.shop.collections
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);