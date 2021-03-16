export const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('app')
  }

  return (
    <div>
      This is GamePage!
      <button
        onClick={handleClick}>
        back to home
      </button>
    </div>
  )
}
