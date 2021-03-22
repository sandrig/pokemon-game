import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components/Button'
import { PokemonCard } from '../../components/PokemonCard'

import database from '../../service/firebase'
import s from '../Game/style.module.css'

const DATA = {
  abilities: ['static', 'lightning-rod'],
  active: false,
  base_experience: 112,
  height: 4,
  img:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  name: 'pikachu',
  stats: {
    attack: 55,
    defense: 40,
    hp: 35,
    'special-attack': 50,
    'special-defense': 50,
    speed: 90,
  },
  type: 'electric',
  values: {
    bottom: 1,
    left: 5,
    right: 5,
    top: 6,
  },
  weight: 60,
}

export const GamePage = () => {
  const [pokemons, setPokemons] = useState({})
  const history = useHistory()

  const goBackToHome = () => {
    history.push('/')
  }

  const getPokemons = () => {
    database.ref('pokemons').once('value', snapshot => {
      setPokemons(snapshot.val())
    })
  }

  useEffect(() => {
    getPokemons()
  }, [])

  const handleChangeActive = id => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] }
        if (pokemon.id === id) {
          pokemon.isActive = !pokemon.isActive
          database.ref('pokemons/' + item[0]).set(pokemon)
        }

        acc[item[0]] = pokemon

        return acc
      }, {})
    })
  }

  const handleAddPokemon = () => {
    const data = DATA

    const newKey = database.ref().child('pokemons').push().key
    database
      .ref('pokemons/' + newKey)
      .set(data)
      .then(() => getPokemons())
  }

  return (
    <>
      <div>
        <h1>This is GamePage!</h1>
        <Button title="back to Home" onClick={goBackToHome} />
      </div>
      <div className={s.buttonWrap}>
        <Button title="Add New Pokemon" onClick={handleAddPokemon} />
      </div>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, name, img, type, values, isActive }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={isActive}
              onPokemonCardClick={handleChangeActive}
            />
          ),
        )}
      </div>
    </>
  )
}
