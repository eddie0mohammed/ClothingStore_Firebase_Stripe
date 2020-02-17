
import React from 'react';

import styles from './SignUp.module.scss';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends React.Component{


    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        if (this.state.password !== this.state.confirmPassword){
            alert("password don't match");
            return ;
        }

        try{

            const {user} = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);

            const displayName = this.state.displayName;

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        

        }catch(error){

            console.log(error);
        }


    }

    handlechange = (e) => {
        
        // console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){

        // console.log(this.state);

        return (
            <div className={styles.signUp}>
                <h2 className={styles.title}>I do not have an account</h2>

                <span>Sign up with your email and password</span>

                <form className={styles.signUpForm} onSubmit={this.handleSubmit}>

                    <FormInput type="text" name="displayName" value={this.state.displayName} handlechange={this.handlechange} label="Display Name" required />

                    <FormInput type="email" name="email" value={this.state.email} handlechange={this.handlechange} label="Email" required />

                    <FormInput type="password" name="password" value={this.state.password} handlechange={this.handlechange} label="Password" required />

                    <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} handlechange={this.handlechange} label="Confirm Password" required />

                    <Button type="submit"> SIGN UP</Button>

                </form>

            </div>
        )
    }
}

export default SignUp;