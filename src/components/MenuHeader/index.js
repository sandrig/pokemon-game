import { useState } from 'react'
import { Menu } from '../Menu'
import { NavBar } from '../NavBar'

export const MenuHeader = () => {
  const [isMenuActive, setMenuActive] = useState(false)
  const handleMenuButtonClick = () => {
    setMenuActive(prevState => !prevState)
  }

  return (
    <>
      <Menu isActive={isMenuActive}/>
      <NavBar
        isMenuActive={isMenuActive}
        changeMenuActive={handleMenuButtonClick}
      />
    </>
  )
}
