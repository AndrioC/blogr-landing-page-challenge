import styled from 'styled-components'

import imgBg from '../../assets/images/bg-pattern-intro.svg'

interface HeaderContentProps{
    isOpen: boolean;
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

        .menu-nav-bar{
            display: none;
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

    /* Desktop */
    @media(min-width: 901px){
        width: 100%;
        flex-direction: column;

        .menuInfo {
            display: flex;
            width: 100%;
            align-items: center;
            padding: 24px 56px;

            > button {
                display: none;
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

            .button-learn-more{
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