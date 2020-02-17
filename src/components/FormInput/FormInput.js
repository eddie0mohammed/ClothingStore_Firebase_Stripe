
import React from 'react';

import styles from './FormInput.module.scss';


class FormInput extends React.Component{

    render(){

        const {handlechange, ...otherProps} = this.props;
        // console.log(otherProps)
        

        return (
            <div className={styles.group}>
 
                <input className={styles.formInput} onChange={handlechange} {...otherProps} />

                {this.props.label ? 
                    <label className={`${this.props.value.length ? `${styles.shrink}` : ''} ${styles.formInputLabel}`}>{this.props.label}</label> :
                    null
                }

            </div>
        )
    }
}

export default FormInput;