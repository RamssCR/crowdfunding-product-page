import { useCallback, useState } from 'react'
import Logo from "./Logo"
import Navbar from './Navbar'
import ButtonMobile from "../UI/ButtonMobile"
import MobileNavbar from './MobileNavbar'
import hamburger from '../../assets/images/icon-hamburger.svg'
import close from '../../assets/images/icon-close-menu.svg'
import "./styles.css"

function Header() {
    const [activate, setActivate] = useState(false)
    const activateModal = useCallback(() => setActivate(prevState => !prevState), [])

    return (
        <header data-testid="header" className="flex w-full h-80 justify-between bg-cover items-start p-8 bg-no-repeat lg:h-112 lg:px-44 lg:py-10">
            <Logo />
            <Navbar />
            <ButtonMobile 
                src={activate ? close : hamburger} 
                alt={activate ? 'Close' : 'Navigate'} 
                onClick={activateModal}
                aria-expanded={activate} 
            />
            {activate && <MobileNavbar />}
        </header>
    )
}

export default Header