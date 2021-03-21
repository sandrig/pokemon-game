import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components/Button'
import { PokemonCard } from '../../components/PokemonCard'
import { POKEMONS } from '../../mocks/pokemons'

import database from '../../service/firebase'
import s from '../Game/style.module.css'

export const GamePage = () => {
  const history = useHistory()

  const goBackToHome = () => {
    history.push('/')
  }

  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    database.ref('pokemons').once('value', snapshot => {
      setPokemons(snapshot.val())
    })
  }, [])

  const handlePokemonCardClick = id => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] }
        if (pokemon.id === id) {
          pokemon.isActive = pokemon.isActive ? !pokemon.isActive : true
          database.ref('pokemons/' + item[0]).set(pokemon)
        }

        acc[item[0]] = pokemon

        return acc
      }, {})
    })
  }

  const addPokemon = () => {
    const newPokemon = {
      ...POKEMONS[0],
      id: Date.now(),
    }

    const newKey = database.ref().child('pokemons').push().key
    database.ref('pokemons/' + newKey).set(newPokemon)
    database.ref('pokemons').once('value', snapshot => {
      setPokemons(snapshot.val())
    })
  }

  return (
    <>
      <div>
        <h1>This is GamePage!</h1>
        <Button title="back to Home" onClick={goBackToHome} />
      </div>
      <div className={s.buttonWrap}>
        <Button title="Add New Pokemon" onClick={addPokemon} />
      </div>
      <div className={s.flex}>
        {Object.entries(pokemons).map(([_, item]) => (
          <PokemonCard
            key={item.id}
            name={item.name}
            img={item.img}
            id={item.id}
            type={item.type}
            values={item.values}
            isActive={item.isActive}
            onPokemonCardClick={handlePokemonCardClick}
          />
        ))}
      </div>
    </>
  )
}
