import styled from 'styled-components'

import imgBg from '../../assets/images/bg-pattern-intro.svg'

interface HeaderContentProps{
    isOpen: boolean;
}

interface MenuProps{
    isOpen: boolean;
}

interface MenuListProps{
    isOpen: boolean;
    isSelected: boolean;
    selectedId: number;
    indexItem: number;
}

interface SubMenuListProps{
    isSelected: boolean;
    selectedId: number;
    indexItem: number;
}

export const Container = styled.header`
    background: url(${imgBg}), linear-gradient(135deg, #FF8F71 0%, #FF3E55 100%);
    background-position: 50%;
    border-radius: 0px 0px 0px 100px;
    height: 600px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const HeaderContent = styled.div<HeaderContentProps>`
    display: flex;
    align-items: center;


    img {
        cursor: pointer;
    }

    button {
        display: none;
    }

    /* Mobile and Tablet */
    @media (max-width: 900px){
        width: 100%;
        flex-direction: column;
        
        .menuInfo {
            display: flex;
            width: 100%;
            align-items: center;
            padding: 24px 56px;
            justify-content: space-between;
        }

        .hamburger-menu{
            display: ${props => props.isOpen ? 'none' : 'block'};
            transition: filter .3s;

            &:hover{
                filter: brightness(0.72);
            }

        }

        .close-menu {
            display: ${props => props.isOpen ? 'block' : 'none'};

            &:hover{
                filter: brightness(0.72);
            }
            
        }

        button {
            background: transparent;
            border: none;
            display: block;

            &:focus{
                outline: none;
            }
        }
    }

`;

export const Menu = styled.div<MenuProps>`
    display: flex;
    margin-top: -180px;
    flex-direction: column;
    align-items: center;
    background: var(--white);
    width: 324px;
    height: 513px;
    border-radius: 5px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.243444);
    transition: opacity 900ms, visibility 900ms;
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.isOpen ? 1 : 0};
    z-index: 100;

    .division-line{
        height: 1px;
        width: 84%;
        background: var(--gray-50);
        margin-top: 24px;
    }
`;

export const MenuList = styled.div<MenuListProps>`

    @media(max-width: 900px){
        position: relative;

        ul{
            li {
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                margin-top: 24px;

                span {
                    display: inline;
                    font-family: 'Overpass';
                    font-weight: 600;
                    font-size: 18px;
                    color: var(--blue-400);
                }

                button {
                    background: transparent;
                    border: none;
                    margin-top: -9px;


                    img {
                        position: absolute;
                        right: ${props => props.isSelected  ? 79 : -21}px;
                        transform: ${props => props.isSelected && (props.selectedId === props.indexItem + 1) ? 'rotate(180deg)' : 'rotate(0deg)'};
                        cursor: pointer;   
                    }
                }

                .image-active{
                    transition: transform .2s;
                    transform: rotate(180deg);
                }

                .image{
                    transition: transform .2s;
                    transform: rotate(0deg);
                }

                .text-opacity {
                    opacity: 0.75;
                }

                .text {
                    opacity: 1;
                }

            }

        
        }
    }

`;

export const SubMenu = styled.div<SubMenuListProps>`
    display: flex;
    align-items: center;
    transition: display 0.9s;
    display: ${props => props.isSelected && (props.selectedId === props.indexItem + 1) ? 'block' : 'none'};

    @media(max-width: 900px){
        width: 276px;
        height: 150px;
        background: red;
        border-radius: 5px;
        background: var(--gray-50);


        ul {
            li {
            display: flex;
            align-items: center;
            justify-content: center;
                a {
                    color: black;
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 800;
                    color: var(--blue-400);
                    transition: filter .3s;
                    margin-top: 10px;

                    &:hover{
                        filter: brightness(0.33);
                    }
                }
            }
        }
    }
`;

export const AuthSignUp = styled.div`
    display: flex;
    align-items: center;


    @media(max-width: 900px){
        flex-direction: column;
        margin-top: 24px;

        span {
            font-size: 18px;
            font-weight: bolder;
            color: var(--blue-400);
        }

        button {
            background: linear-gradient(135deg, var(--red-10) 0%, var(--red-100) 100%);
            color: var(--white);
            border: none;
            margin-top: 24px;
            width: 138px;
            height: 48px;
            border-radius: 27px;
            font-size: 18px;
            font-weight: bold;
            font-family: 'Ubuntu';
            transition: filter .3s;

            &:hover {
                filter: brightness(0.873);
            }
        }
    }
`;

export const InfoContent = styled.div`
    @media(max-width: 900px){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 108px;

        h1 {
            font-size: 36px;
            font-weight: 600;
            color: var(--white);
            max-width: 330px;
            text-align: center;
            line-height: 55px;
        }

        p {
            font-size: 18px;
            font-weight: 300;
            line-height: 27px;
            color: var(--white);
            max-width: 300px;
            text-align: center;
        }

        > div {
            display: flex;   
            margin-top: 48px;         
            button {
                width: 138px;
                height: 48px;    
                border-radius: 27px;

                & + button {
                    margin-left: 18px;
                }
            }

            .button-start-for-free{
                background: var(--white);
                color: var(--red-100);
                font-size: 16px;
                font-weight: bold;
                font-family: 'Ubuntu';
                transition: .3s;

                &:hover{
                    background: var(--red-50); 
                    color: var(--white);   
                }
            }

            .button-lear-more{
                background: transparent;
                border: 2px solid var(--white);
                color: var(--white);
                font-size: 16px;
                font-weight: bold;
                font-family: 'Ubuntu';
                transition: .3s;

                &:hover{
                    background: var(--white); 
                    color: var(--red-100); 
                }
            }
        }
    }
`;