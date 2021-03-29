import React, { useMemo, useState } from 'react'

import {
    Container,
    Content,
    HeaderContent,
    InfoContent,
} from './styles'

import logoImg from '../../assets/images/logo.svg'
import closeIcon from '../../assets/images/icon-close.svg'
import hamburgerIcon from '../../assets/images/icon-hamburger.svg'
import HamburgerMenu from '../HamburgerMenu'


const Header:React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)      

    function handleMenu(){
        setIsOpen(!isOpen)
    }

    return (
        <Container>
            <Content>

                <HeaderContent isOpen={isOpen}>
                    <div className={'menuInfo'}>
                        <img src={logoImg} alt="logo"/>
                        <button onClick={handleMenu}>
                            <img className={'hamburger-menu'} src={hamburgerIcon} alt="hamburger-menu"/>
                            <img className={'close-menu'} src={closeIcon} alt="close-menu"/>
                        </button> 
                    </div>

                    <InfoContent>
                        <h1>A modern publishing platform</h1>
                        <p>Grow yout audience and build your online brand</p>
                        <div>
                            <button className={'button-start-for-free'} type="button">Start for Free</button>
                            <button className={'button-learn-more'} type="button">Learn More</button>
                        </div>
                    </InfoContent>
                </HeaderContent>
                <HamburgerMenu isOpen={isOpen}/>
                
                               
            </Content>
            
        </Container>
    )
}

export default Header