import { Header } from '../../components/Header'
import { Layout } from '../../components/Layout'
import { MenuHeader } from '../../components/MenuHeader'
import { PokemonCard } from '../../components/PokemonCard'
import { Footer } from '../../components/Footer'
import { POKEMONS } from '../../mocks/pokemons'

import Bg1IMG from '../../assets/bg1.jpg'
import Bg3IMG from '../../assets/bg3.jpg'

import s from './style.module.css'



export const HomePage = ({ onChangePage }) => {
  const handleClickButton = (page) => {
    onChangePage && onChangePage(page)
  }

  return (
    <>
      <MenuHeader />
      <Header
        title="Pokemon Game"
        descr="This is simple triple triad card game"
        onClickButton={handleClickButton}
      />
      <Layout
        title="This is First Layout"
        urlBg={Bg3IMG}
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      </Layout>
      <Layout
        title="Cards"
        colorBg="#202736"
      >
        <div className={s.flex}>
          {
            POKEMONS.map(card =>
              <PokemonCard
                key={card.id}
                name={card.name}
                img={card.img}
                id={card.id}
                type={card.type}
                values={card.values}
              />)
          }
        </div>
      </Layout>
      <Layout
        title="This is First Layout"
        urlBg={Bg1IMG}
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      </Layout>
      <Footer/>
    </>
  )
}
