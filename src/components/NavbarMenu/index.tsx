import React, { useMemo, useState } from 'react'

import {
    Container,
    SubMenu,
    AuthSignUp
} from './styles'

import iconArrow from '../../assets/images/icon-arrow-light.svg'
import menu from '../../assets/data/menu'

interface MenuData{
    id: number;
    title: string;
    submenu: {
        id: number;
        title: string;
    }[]
}

const NavbarMenu:React.FC = () => {

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
        <Container isSelected={isSelected} selectedId={selectedId} indexItem={selectedIndex}>
            <ul className={'menu-list'}>
                {menuData.map((item, index) => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <button onClick={() => handleSubMenu(item.id, index)}>
                            <img src={iconArrow} alt="icon-arrow" className={`image${(selectedId === index + 1 && isSelected) ? "-active" : ""}`}/>    
                        </button>
                        <SubMenu isSelected={isSelected} selectedId={selectedId} indexItem={index}>
                            <div className={'sub-menu-list'}>
                                <ul>
                                    {item.submenu.map(sub => (
                                        <li key={sub.id}>
                                            <a href="#about">{sub.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SubMenu>
                    </li>
                ))}
                
            </ul>

            <AuthSignUp>                         
                <button className={'button-login'} type="button">Login</button>                        
                <button className={'button-sign-up'} type="button">Sign Up</button>
            </AuthSignUp> 

            
        </Container>
    )
}

export default NavbarMenu