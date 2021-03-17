import { Link } from 'react-router-dom'
import cn from 'classnames'

import s from './style.module.css'

const MENU = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Game',
    to: '/game',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
]

export const Menu = ({ isOpen, onClickHamburg }) => {
  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isOpen === true,
        [s.deactive]: isOpen === false,
      })}
    >
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to} onClick={onClickHamburg}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
