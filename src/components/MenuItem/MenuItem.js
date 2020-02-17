import React from 'react';

import styles from './MenuItem.module.scss';

import {withRouter} from 'react-router-dom';


class MenuItem extends React.Component{

    render(){

        return (
            <div className={`${styles.menuItem} ${this.props.elem.size}`} >

                <div className={styles.backgroundImg} style={{backgroundImage: `url(${this.props.elem.imageUrl})`}}></div>
                <div className={styles.content} onClick={() => this.props.history.push(`${this.props.match.url}${this.props.elem.linkUrl}`)}>

                    <h2 className={styles.title}>{this.props.title}</h2>
                    <span className={styles.subtitle}>SHOP NOW</span>
                </div>
            </div>
            )
    }
}

export default withRouter(MenuItem);