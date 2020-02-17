import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAoPcILim15V1Y-TR-1sYvQL32ay-jEHBI",
    authDomain: "clothing-e6528.firebaseapp.com",
    databaseURL: "https://clothing-e6528.firebaseio.com",
    projectId: "clothing-e6528",
    storageBucket: "clothing-e6528.appspot.com",
    messagingSenderId: "567670164232",
    appId: "1:567670164232:web:ac86fccbdfe4c4a0fa7abd"
}


export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error.message);

        }
    }
    return userRef;
}




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;