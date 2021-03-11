import { Header, Layout, Footer } from './components'
import BgImage from './assets/bg1.jpg'

export const App = () => (
  <>
    <Header title="Pokemon game" descr="Pokemon Trading Card Game" />
    <Layout title="Title 1" descr="First description for layout " urlBg={BgImage} />
    <Layout title="Title 2" descr="Second description for layout" colorBg="#e2e2e2"/>
    <Layout title="Title 3" descr="Third description for layout" urlBg={BgImage}  />
    <Footer />
  </>
)
