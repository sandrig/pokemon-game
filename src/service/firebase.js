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

class Firebase {
  constructor() {
    this.fire = firebase
    this.database = this.fire.database()
  }

  getPokemonSocket = cb => {
    this.database.ref('pokemons').on('value', snapshot => {
      cb(snapshot.val())
    })
  }

  offPokemonSocket = () => {
    this.database.ref('pokemons').off()
  }

  getPokemonsOnce = async () => {
    return await this.database
      .ref('pokemons')
      .once('value')
      .then(snapshot => snapshot.val())
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon)
  }

  addPokemon = pokemon => {
    const newKey = this.database.ref().child('pokemons').push().key
    this.database.ref('pokemons/' + newKey).set(pokemon)
  }
}

export const FirebaseClass = new Firebase()
