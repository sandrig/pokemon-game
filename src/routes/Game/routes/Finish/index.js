import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import cn from 'classnames'

import { PokemonCard } from '../../../../components/PokemonCard'

import s from './style.module.css'

import { FireBaseContext } from '../../../../context/firebaseContext'
import { PokemonContext } from '../../../../context/pokemonContext'

export const FinishPage = () => {
  const history = useHistory()

  const fireBaseContext = useContext(FireBaseContext)
  const pokemonContext = useContext(PokemonContext)

  const player1 = Object.values(pokemonContext.pokemons).map(item => ({
    ...item,
  }))

  const [player2, setPlayer2] = useState(() =>
    pokemonContext.finishBoard.map(item => ({ ...item, isSelected: false })),
  )
  const [selectedCard, setSelectedCard] = useState(null)

  const handleSelectedCard = card => {
    setPlayer2(prevState =>
      prevState.map(item => ({
        ...item,
        isSelected: item.id === card.id,
      })),
    )
    setSelectedCard(card)
  }

  const handleEndGameClick = () => {
    fireBaseContext.addPokemon(selectedCard)
    pokemonContext.clearPokemonContext()
    history.replace('/game')
  }

  if (player1.length === 0) {
    history.replace('/game')
  }

  return (
    <div className={s.root}>
      <div className={s.playerCardWrapper}>
        {player1 &&
          player1.map(item => (
            <PokemonCard
              key={item.id}
              name={item.name}
              img={item.img}
              id={item.id}
              type={item.type}
              values={item.values}
              isActive
              className={s.card}
            />
          ))}
      </div>
      <div className={s.buttonWrapper}>
        <button onClick={handleEndGameClick}>End Game</button>
      </div>
      <div className={s.playerCardWrapper}>
        {player2 &&
          player2.map(item => (
            <PokemonCard
              key={item.id}
              name={item.name}
              img={item.img}
              id={item.id}
              type={item.type}
              values={item.values}
              isActive
              className={cn(s.card, { [s.selected]: item.isSelected })}
              onClickCard={() => {
                handleSelectedCard(item)
              }}
            />
          ))}
      </div>
    </div>
  )
}
