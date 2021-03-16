import cn from 'classnames'

import { Routes } from '../../routes'

import s from './style.module.css'

export const Menu = ({ isActive }) => {
  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isActive,
        [s.deactive]: !isActive,
      })}
    >
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {Routes.map(({ title, to }, index) => (
            <li key={index}>
              <a href={to}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
