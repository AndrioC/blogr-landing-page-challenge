import styled from 'styled-components'


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

export const Menu = styled.div<MenuProps>`
    display: flex;
    margin-top: -270px;
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
    justify-content: center;
    transition: display 0.9s;
    display: ${props => props.isSelected && (props.selectedId === props.indexItem + 1) ? 'block' : 'none'};

    @media(max-width: 900px){
        width: 276px;
        height: 150px;
        background: red;
        border-radius: 5px;
        background: var(--gray-50);

        .list-submenu{
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 6px;
            a {
                margin-bottom: -12px;
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

            &:hover {                
                background: var(--red-50); 
            }
        }
    }
`;