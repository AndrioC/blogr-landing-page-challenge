import styled from 'styled-components'

export const Container = styled.footer`

    width: 100%;
    background: var(--blue-600);
    display: flex;
    align-items: center;
    margin-top: 100px;
    border-radius: 0px 100px 0px 0px;

    
    @media(max-width: 900px){
        height: 900px;
        flex-direction: column;
        justify-content: center;
       
    }

    @media(min-width: 901px){
        height: 360px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;


        .logo-img {
            position: absolute;
            left: 10px;
            top: 48px;
            img {
                cursor: pointer;
            }
        }
    }

    @media(min-width: 1200px){
        .logo-img {
            left: 90px;
        }
    }

`;

export const MenuList = styled.div`    

    .containerMenu{
        display: flex;
        width: 100%;
        flex-direction: column;

        span {
            font-size: 18px;
            color: var(--white);
            font-weight: 800;
            font-family: 'Ubuntu';
            line-height: 33px;
        }

    }

    .sub-list-menu {

        li {
            font-size: 18px;
            font-weight: lighter;
            line-height: 24px;
            margin-top: 20px;
            font-family: 'Ubuntu';
            opacity: .75;
            color: var(--white);  
            position: relative; 
            cursor: pointer;

            &:hover{
                &::after{
                    content: '';
                    height: 2px;
                    bottom: 1px;
                    position: absolute;
                    left: 0;
                    background: var(--white);  
                    opacity: .75;                        
                }
            }  
        }

    }

    @media(max-width: 900px){
        margin-top: 30px;

        .containerMenu {

            align-items: center;
            justify-content: center;

            span {
                margin-bottom: 10px;    
            }

            ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                list-style: none;            
            }

            & + div {
                margin-top: 40px;
            }
        }

        .sub-list-menu{
            display: flex;
            align-items: center;
            flex-direction: column;

            li {
                &:hover{
                    &::after{
                        width: 100%;                      
                    }
                }     
            }
        }
    }

    @media(min-width: 901px){
        display: flex;

        .containerMenu {

            span {
                margin-bottom: 20px;
            }

            ul {
                list-style: none;        
            }
            
            & + div{
                margin-left: 200px;
            }
        }

        .sub-list-menu{

            li {
                &:hover{
                    &::after{
                        width: 40%;                     
                    }
                }  
            }            
        }
    }
`;