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

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
    }

    .button-start-for-free{
        background: var(--white);
        color: var(--red-100);
        font-size: 16px;
        font-weight: bold;
        font-family: 'Ubuntu';
        transition: .3s;
        border: none;

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

    h1 {
        font-weight: 600;
        color: var(--white);
        text-align: center;
    }

    p {
        font-weight: 300;
        line-height: 27px;
        color: var(--white);
        text-align: center;
    }

    @media(max-width: 900px){
        margin-top: 108px;

        h1 {
            font-size: 36px;
            line-height: 55px;
            max-width: 330px;
        }

        p {
            font-size: 18px;
            max-width: 300px;
        }

    }

    @media(min-width: 901px){
        margin-top: 120px;
        
        h1 {
            font-size: 64px;
            max-width: 900px;
            line-height: 99px;
        }

        p {
            margin-top: 30px;
            font-size: 20px;
            max-width: 500px;
        }

    }
`;