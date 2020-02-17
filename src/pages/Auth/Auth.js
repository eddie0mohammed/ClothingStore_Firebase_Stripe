
import React from 'react';

import styles from './Auth.module.scss';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';


class Auth extends React.Component{


    render(){

        return (
            <div className={styles.auth}>
                
                <SignIn />

                <SignUp />
                
            </div>
        )
    }
}

export default Auth;