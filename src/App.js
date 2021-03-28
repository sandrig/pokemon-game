import { Route, Switch, useLocation, Redirect } from 'react-router-dom'
import cn from 'classnames'

import { AboutPage } from './routes/About'
import { ContactPage } from './routes/Contact'
import { GamePage } from './routes/Game'
import { HomePage } from './routes/Home'
import { NotFoundPage } from './routes/NotFound'
import { MenuHeader } from './components/MenuHeader'
import { Footer } from './components/Footer'

import { FireBaseContext } from './context/firebaseContext'
import { FirebaseClass } from './service/firebase'

import s from './style.module.css'

export const App = () => {
  const location = useLocation()
  const isPadding =
    location.pathname === '/' || location.pathname === '/game/board'

  return (
    <FireBaseContext.Provider value={FirebaseClass}>
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  )
}
