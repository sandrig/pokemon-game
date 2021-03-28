import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { PokemonCard } from '../../../../components/PokemonCard'
import { getPokemonAsync, selectPokemonsData } from '../../../../store/pokemons'
import { selectPokemons1Data, setPokemons1 } from '../../../../store/pokemons1'

import s from './style.module.css'

export const StartPage = () => {
  const pokemonsRedux = useSelector(selectPokemonsData)
  const pokemons1Redux = useSelector(selectPokemons1Data)
  const dispatch = useDispatch()
  const history = useHistory()
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    dispatch(getPokemonAsync())
  }, [])

  useEffect(() => {
    setPokemons(pokemonsRedux)
  }, [pokemonsRedux])

  const handleActiveSelected = key => {
    const pokemon = { ...pokemons[key] }

    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }))

    dispatch(setPokemons1({ key, pokemon }))
  }

  const handleStartGameClick = () => {
    history.push('/game/board')
  }

  return (
    <>
      <div className={s.buttonWrap}>
        <button
          onClick={handleStartGameClick}
          disabled={Object.keys(pokemons1Redux).length < 5}
        >
          Start Game
        </button>
      </div>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, name, img, type, values, selected }]) => (
            <PokemonCard
              className={s.card}
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              isSelected={selected}
              onCardClick={() => {
                if (Object.keys(pokemons1Redux).length < 5 || selected) {
                  handleActiveSelected(key)
                }
              }}
            />
          ),
        )}
      </div>
    </>
  )
}
