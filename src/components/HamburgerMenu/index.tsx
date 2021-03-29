import React, { useMemo, useState } from 'react'

import {
    Menu,
    MenuList,
    SubMenu,
    AuthSignUp
} from './styles'

import iconArrow from '../../assets/images/icon-arrow-dark.svg'

import menu from '../../assets/data/menu'

interface HamburgerMenuProps{
    isOpen: boolean;
}

interface MenuData{
    id: number;
    title: string;
    submenu: {
        id: number;
        title: string;
    }[]
}

const HamburgerMenu:React.FC<HamburgerMenuProps> = ({isOpen}) => {
    
    const [selectedId, setSelectedId] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isSelected, setIsSelected] = useState(false)

    const [menuData, setMenuData] = useState<MenuData[]>([])

    useMemo(() => {
        setMenuData(menu)
    }, [])

    function handleSubMenu(id: number, index: number){
        setSelectedId(id)
        setSelectedIndex(index)
        setIsSelected(!isSelected)
    }
    
    return (
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
                                        <li key={sub.id} className={'list-submenu'}>
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
    )
}

export default HamburgerMenu