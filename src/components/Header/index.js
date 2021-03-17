import { useHistory } from 'react-router-dom'

import s from './style.module.css'

export const Header = ({ title, descr }) => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/game')
  }

  return (
    <header className={s.root}>
      <div className={s.forest} />
      <div className={s.silhouette} />
      <div className={s.moon} />
      <div className={s.container}>
        {title && <h1>{title}</h1>}
        {descr && <p>{descr}</p>}
        <button className={s.button} onClick={handleClick}>
          Start Game
        </button>
      </div>
    </header>
  )
}
