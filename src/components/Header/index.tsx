import React, { useMemo, useState } from 'react'

import {
    Container,
    Content,
    HeaderContent,
    Menu,
    MenuList,
    SubMenu,
    AuthSignUp,
} from './styles'

import logoImg from '../../assets/images/logo.svg'
import closeIcon from '../../assets/images/icon-close.svg'
import hamburgerIcon from '../../assets/images/icon-hamburger.svg'
import iconArrow from '../../assets/images/icon-arrow-dark.svg'

import menu from '../../assets/data/menu'

interface MenuData{
    id: number;
    title: string;
    submenu: {
        id: number;
        title: string;
    }[]
}

const Header:React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [selectedId, setSelectedId] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isSelected, setIsSelected] = useState(false)

    const [menuData, setMenuData] = useState<MenuData[]>([])

    useMemo(() => {
        setMenuData(menu)
    }, [])

    function handleMenu(){
        setIsOpen(!isOpen)
    }

    function handleSubMenu(id: number, index: number){
        setSelectedId(id)
        setSelectedIndex(index)
        setIsSelected(!isSelected)
    }

    return (
        <Container>
            <Content>

                <HeaderContent isOpen={isOpen}>
                    <img src={logoImg} alt="logo"/>
                    <button onClick={handleMenu}>
                        <img className={'hamburger-menu'} src={hamburgerIcon} alt="hamburger-menu"/>
                        <img className={'close-menu'} src={closeIcon} alt="close-menu"/>
                    </button> 
                </HeaderContent>

                <Menu isOpen={isOpen}>
                    <MenuList isOpen={isOpen} isSelected={isSelected} selectedId={selectedId} indexItem={selectedIndex}>
                        <ul>
                            {menuData.map((item, index) => (
                                <>
                                <li key={item.id} className={'first-list'}>
                                    <span className={`text${(index + 1 === selectedId && isSelected) ? "-opacity" : ""}`}>{item.title}</span>
                                    <button onClick={() => handleSubMenu(item.id, index)} key={item.id}>
                                        <img src={iconArrow} alt="icon-arrow" className={`image${(index + 1 === selectedId && isSelected) ? "-active" : ""}`}/>
                                    </button>
                                </li>
                                <SubMenu key={Math.random()} isSelected={isSelected} selectedId={selectedId} indexItem={index}>
                                    <ul>
                                    {item.submenu.map(sub => (
                                        <li key={sub.id}>
                                            <a href="#about">{sub.title}</a>
                                        </li>
                                    ))}
                                    </ul>
                                </SubMenu>
                                </>
                            ))}
                        </ul>
                    </MenuList>

                    <div className={'division-line'}/>

                    <AuthSignUp>
                        <span>Login</span>     
                        <button type="button">Sign Up</button>                    
                    </AuthSignUp>
                </Menu>
                               
            </Content>
            
        </Container>
    )
}

export default Header