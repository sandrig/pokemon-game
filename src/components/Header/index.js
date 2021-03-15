import s from './style.module.css'

export const Header = ({ title, descr, onClickButton }) => {
  const handleClick = () => {
    onClickButton && onClickButton('game')
  }

  return (
    <header className={s.root}>
      <div className={s.forest} />
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button className={s.button} onClick={handleClick}>
          Start Game
        </button>
      </div>
    </header>
  )
}
