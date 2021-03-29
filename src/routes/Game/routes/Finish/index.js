import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import cn from 'classnames'

import { PokemonCard } from '../../../../components/PokemonCard'

import { selectPokemons1Data } from '../../../../store/pokemons1'
import { selectPokemons2Data } from '../../../../store/pokemons2'
import { FirebaseClass } from '../../../../service/firebase'

import s from './style.module.css'

export const FinishPage = () => {
  const history = useHistory()

  const pokemons1Redux = useSelector(selectPokemons1Data)
  const pokemons2Redux = useSelector(selectPokemons2Data)

  const player1 = Object.values(pokemons1Redux).map(item => ({ ...item }))
  const [player2, setPlayer2] = useState(() =>
    pokemons2Redux.map(item => ({ ...item, isSelected: false })),
  )
  const [selectedCard, setSelectedCard] = useState(null)

  const handleSelectedCard = card => {
    setPlayer2(prevState =>
      prevState.map(item => ({
        ...item,
        isSelected: item.id === card.id,
      })),
    )
    if (player1.length > player2.length) {
      setSelectedCard(card)
    }
  }

  const handleEndGameClick = () => {
    if (selectedCard) {
      FirebaseClass.addPokemon(selectedCard)
    }
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
