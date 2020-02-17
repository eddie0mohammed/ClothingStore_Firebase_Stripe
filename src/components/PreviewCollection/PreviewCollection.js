
import React from 'react';

import styles from './PreviewCollection.module.scss';

import CollectionItem from '../CollectionItem/CollectionItem';


class PreviewCollection extends React.Component{


    renderItems = () => {
        return this.props.items.filter((elem1, index) => index < 4).map( (elem) => {
            return (
                <CollectionItem key={elem.id} elem={elem}/>
            )
        })
    }

    render(){

        return (
            <div className={styles.collectionPreview}>

                <h2 className={styles.title}>{this.props.title.toUpperCase()}</h2>

                <div className={styles.preview}>
                    
                    {this.renderItems()}

                </div> 

            </div>
        )
    }
}

export default PreviewCollection;