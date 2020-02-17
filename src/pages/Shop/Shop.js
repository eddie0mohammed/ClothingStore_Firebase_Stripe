
import React from 'react';

// import styles from './Shop.module.scss';

// import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

// import {data} from './data';

import {connect} from 'react-redux';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import Category from '../Category/Category';

import {Route ,Switch} from 'react-router-dom';

class Shop extends React.Component{ 

    render(){

        return (
            <div>
                
                <Switch>
                    <Route path={this.props.match.path} exact component={CollectionsOverview } />
                    <Route path={`${this.props.match.path}/:categoryId`} exact component={Category } />
                </Switch>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collections: state.shop.collections
    }
}

export default connect(mapStateToProps)(Shop);