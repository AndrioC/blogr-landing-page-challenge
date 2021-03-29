import React, { useMemo, useState } from 'react'

import {
    Container,
    MenuList
} from './styles'

import logoImg from '../../assets/images/logo.svg'
import menu from '../../assets/data/menu'

interface MenuData{
    id: number;
    title: string;
    submenu: {
        id: number;
        title: string;
    }[]
}

const Footer:React.FC = () => {

    const [menuData, setMenuData] = useState<MenuData[]>([])

    useMemo(() => {
        setMenuData(menu)
    }, [])
    return (
        <Container>
            <div className={'logo-img'}>
                <img src={logoImg} alt="logo"/> 
            </div>
            <MenuList>
                {menuData.map(item => (
                    <div key={item.id} className={'containerMenu'}>
                        <span>{item.title}</span>
                        
                            {item.submenu.map(sub => (
                                <div className={'sub-list-menu'} key={sub.id}>
                                    <ul>
                                        <li>{sub.title}</li>
                                    </ul>
                                </div>
                            ))}
                    </div>
                ))}
            </MenuList>
        </Container>
    )
}

export default Footer