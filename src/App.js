import React from 'react';
import './App.css';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Auth from './pages/Auth/Auth';
import Checkout from './pages/Checkout/Checkout';


import {Switch, Route, Redirect} from 'react-router-dom';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import * as actionCreators from './Redux/Actions/actionCreators';

import {connect} from 'react-redux';

class App extends React.Component {


  // state = {
  //   currentUser: null
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }else{
        this.props.setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

  
    return (
      <div className="App">

        <Header />

        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/auth" exact render={() => this.props.currentUser ? <Redirect to='/' /> : <Auth />}  />
          <Route path='/checkout' exact component={Checkout} />

        </Switch>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(actionCreators.setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
