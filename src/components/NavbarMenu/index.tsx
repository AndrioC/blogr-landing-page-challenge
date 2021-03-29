import React, { useMemo, useState } from 'react'

import {
    Container,
    SubMenu,
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
            {/* <ul>
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
            </ul>   */}  

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

            
        </Container>
    )
}

export default NavbarMenu