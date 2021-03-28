import styled from 'styled-components'

import imgBg from '../../assets/images/bg-pattern-intro.svg'

interface HeaderContentProps{
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
`;

export const HeaderContent = styled.div<HeaderContentProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 56px 24px;

    img {
        cursor: pointer;
    }

    button {
        display: none;
    }

    /* Mobile and Tablet */
    @media (max-width: 900px){

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

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    background: var(--white);
    width: 324px;
    height: 513px;
    border-radius: 5px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.243444);
`;

export const MenuList = styled.div<MenuListProps>`

    @media(max-width: 900px){
        margin-top: 24px;

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

                & + li {
                    margin-top: 24px;
                }

            }

        
        }
    }

`;

export const SubMenu = styled.div<SubMenuListProps>`
    display: flex;
    align-items: center;
    transition: display 0.9s;
    background: red;
    display: ${props => props.isSelected && (props.selectedId === props.indexItem + 1) ? 'block' : 'none'};

    @media(max-width: 900px){
        width: 276px;
        height: 150px;
        background: red;
        border-radius: 5px;
        background: var(--gray-50);

        li {
            display: flex;
            a {
                color: black;
                text-decoration: none;
                font-size: 16px;
                font-weight: 800;
                color: var(--blue-400);
                transition: filter .3s;

                &:hover{
                    filter: brightness(0.33);
                }
            }




        }
    }
`;

export const AuthSignUp = styled.div`


`;