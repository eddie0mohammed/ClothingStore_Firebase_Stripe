import React from 'react';

import styles from './CollectionsOverview.module.scss';

import {connect} from 'react-redux';

import PreviewCollection from '../PreviewCollection/PreviewCollection';


class CollectionsOverview extends React.Component{


    renderCollections = () => {
        return this.props.collections.map(elem => {
            return (
                <PreviewCollection key={elem.id} title={elem.title} items={elem.items}/>
            )
        })
    }

    render(){

        return (
            <div className={styles.collectionsOverview}>
               
               {this.renderCollections()}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collections: state.shop.collections
    }
}

export default connect(mapStateToProps)(CollectionsOverview);