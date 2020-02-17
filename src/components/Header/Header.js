
import React from 'react';

import styles from './Header.module.scss';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import * as actionCreators from '../../Redux/Actions/actionCreators';

class Header extends React.Component{


    render(){

        const numberOfItemsInCart = this.props.cartItems.reduce((acc, elem) => {
            return acc + elem.quantity;
        }, 0);
        

        return (
                <div className={styles.header}>
                    <Link to='/' className={styles.logoContainer}>
                        <Logo className={styles.logo} />
                    </Link>
                

                    <div className={styles.options}>
                        <Link to='/shop' className={styles.option}>SHOP</Link>
                        <Link to='/shop' className={styles.option}>CONTACT</Link>

                        {
                            this.props.currentUser ? 
                            <div className={styles.option} onClick={() => auth.signOut()}>SIGN OUT</div>
                            :
                            <Link to='/auth' className={styles.option}>SIGN IN</Link>
                            
                        }

                        <CartIcon clicked={this.props.toggleCart} number={numberOfItemsInCart}/>
                        
                    </div>

                    {!this.props.showCart ? 
                        <CartDropdown /> :
                        ''
                    }
                    
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        showCart: state.cart.hidden,
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(actionCreators.toggleCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);