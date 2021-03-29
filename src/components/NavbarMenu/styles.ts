import styled from 'styled-components'

interface SubMenuListProps{
    isSelected: boolean;
    selectedId: number;
    indexItem: number;
}

export const Container = styled.nav<SubMenuListProps>`

    @media(min-width: 901px){
        margin-left: 72px;

        .menu-list{
            display: flex;
            > li {
                display: flex;
                list-style: none;
                position: relative; 

                button {
                    background: transparent;
                    border: none;
                
                    &:focus{
                        outline: none;
                    }
                }

                span {
                    font-family: 'Ubuntu';
                    color: var(--white);
                    font-size: 16px;
                    font-weight: bold;       
                }

                img {
                    margin-left: 9px;
                }    

                .image-active{
                    transition: transform .2s;
                    transform: rotate(180deg);
                }

                .image{
                    transition: transform .2s;
                    transform: rotate(0deg);
                }

                
                & + li {
                    margin-left: 33px;    
                }
                
                cursor: pointer;

                &:hover{
                    &::after{
                        content: '';
                        height: 2px;
                        width: 100%;
                        top: 18px;
                        position: absolute;
                        left: 0;
                        background: var(--white);  
                        opacity: .75;                        
                    }
                }   
            }
        }    
   
    }        

`;

export const SubMenu = styled.div<SubMenuListProps>`

    @media(min-width: 901px){
        /* Sub-menu-list */
        .sub-menu-list {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 168px;
            height: 147px;
            border-radius: 6px;
            background: var(--white);
            transition: opacity 900ms, visibility 900ms;
            visibility: ${props => props.isSelected && (props.selectedId === props.indexItem + 1) ? 'visible' : 'hidden'};
            opacity: ${props => props.isSelected && (props.selectedId === props.indexItem + 1) ? 1 : 0};
            top: 36px;
            left: -50px;

            > ul {
                display: flex;
                flex-direction: column;
                justify-content: center;

                > li {
                    list-style: none;
                    transition: .3s;


                    &:hover{
                        font-weight: bold;
                    }

                
                    a {
                        text-decoration: none;   
                        font-size: 15px;
                        font-family: 'Ubuntu';
                        color: var(--blue-950);
                        & + a {
                            margin-top: 30px;
                        }
                    } 

                    & + li {
                        margin-top: 10px;
                    }

                }
            }

                
        }
    }
    
`;