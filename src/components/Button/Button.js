
import React from 'react';

import styles from './Button.module.scss';


const Button = (props) => {

    // console.log(props)

    return (
        <button className={`${styles.customButton} ${props.isgoogle ? styles.google : ''} ${props.inverted ? styles.inverted : ''}`} {...props}>
            {props.children}
        </button>
    )
}

export default Button;