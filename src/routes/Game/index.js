import { useState } from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'

import { StartPage } from './routes/Start'
import { BoardPage } from './routes/Board'
import { FinishPage } from './routes/Finish'
import { PokemonContext } from '../../context/pokemonContext'

export const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({})
  const [finishBoard, setFinishBoard] = useState([])
  const match = useRouteMatch()

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons(prevState => {
      if (prevState[key]) {
        const copyState = { ...prevState }
        delete copyState[key]

        return copyState
      }

      return {
        ...prevState,
        [key]: pokemon,
      }
    })
  }

  const clearPokemonContext = () => {
    setSelectedPokemons({})
    setFinishBoard([])
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons: selectedPokemons,
        onSelectedPokemons: handleSelectedPokemons,
        finishBoard,
        setFinishBoard,
        clearPokemonContext,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  )
}
