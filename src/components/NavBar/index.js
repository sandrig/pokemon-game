import cn from 'classnames'

import s from './style.module.css'

export const NavBar = ({ isOpen, bgActive = false, onClickHamburg }) => {
  return (
    <nav className={cn(s.root, { [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div
          className={cn(s.menuButton, { [s.active]: isOpen })}
          onClick={onClickHamburg}
        >
          <span />
        </div>
      </div>
    </nav>
  )
}
