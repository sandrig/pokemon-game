import cn from 'classnames'

import s from './style.module.css'

export const NavBar = ({ isMenuActive, changeMenuActive }) => {
  const handleMenuButtonClick = () => {
    changeMenuActive && changeMenuActive()
  }

  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <a
          className={cn(s.menuButton, {[s.active]: isMenuActive})}
          onClick={handleMenuButtonClick}
        >
          <span/>
        </a>
      </div>
    </nav>
  )
}
