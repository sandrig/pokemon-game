import { Header } from '../../components/Header'
import { Layout } from '../../components/Layout'

import Bg1IMG from '../../assets/bg1.jpg'
import Bg3IMG from '../../assets/bg3.jpg'

export const HomePage = () => {
  return (
    <>
      <Header
        title="Pokemon Game"
        descr="This is simple triple triad card game"
      />
      <Layout title="This is First Layout" urlBg={Bg3IMG}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid.
        </p>
        <p>
          Each player has five cards in a hand and the aim is to capture the
          opponent's cards by turning them into the player's own color of red or
          blue.
        </p>
      </Layout>
      <Layout title="Cards" colorBg="#202736">
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid.
        </p>
        <p>
          Each player has five cards in a hand and the aim is to capture the
          opponent's cards by turning them into the player's own color of red or
          blue.
        </p>
      </Layout>
      <Layout title="This is First Layout" urlBg={Bg1IMG}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid.
        </p>
        <p>
          Each player has five cards in a hand and the aim is to capture the
          opponent's cards by turning them into the player's own color of red or
          blue.
        </p>
      </Layout>
    </>
  )
}
