import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBhZzPIWiEr0O3Ak6vyBM3IKim4LMsv4oo',
  authDomain: 'pokemon-game-619d7.firebaseapp.com',
  databaseURL: 'https://pokemon-game-619d7-default-rtdb.firebaseio.com',
  projectId: 'pokemon-game-619d7',
  storageBucket: 'pokemon-game-619d7.appspot.com',
  messagingSenderId: '886062276969',
  appId: '1:886062276969:web:6094f502d05d2b5e741df8',
}

firebase.initializeApp(firebaseConfig)
export const fire = firebase
export const database = fire.database()

export default database
