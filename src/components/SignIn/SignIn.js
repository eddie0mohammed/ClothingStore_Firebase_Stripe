import React from 'react';

import styles from './SignIn.module.scss';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';

class SignIn extends React.Component{


    state = {
        email: '',
        password: ''
    }

    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                email: '',
                password: ''
            });
        
        }catch(error){
            console.log(error);
        }

    }

    render(){

        return (
            <div className={styles.signIn}>

                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput handlechange={this.handlechange} name="email" type='email' value={this.state.email} required label="Email" />

                    <FormInput handlechange={this.handlechange} name="password" type='password' value={this.state.password} required label="Password"/>


                    <div className={styles.buttons}>
                        <Button type="submit">Submit</Button>
                        <Button onClick={signInWithGoogle} isgoogle='true' >Sign In With Google</Button>
                    </div>
                    
                </form>

            </div>
        )
    }
}

export default SignIn;