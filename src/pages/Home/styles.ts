import styled from 'styled-components'

import imgBgSectionOne from '../../assets/images/illustration-editor-mobile.svg'
import imgBgDesktopSectionOne from '../../assets/images/illustration-editor-desktop.svg'

import imgPhoneBgSectionTwo from '../../assets/images/illustration-phones.svg'
import imgCirclesBgSectionTwo from '../../assets/images/bg-pattern-circles.svg'

import imgComputerSectionThree from '../../assets/images/illustration-laptop-mobile.svg'
import imgComputerDesktopSectionThree from '../../assets/images/illustration-laptop-desktop.svg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 100px;


    section {
        width: 100%;
    }


    @media(min-width: 901px){
        margin-top: 150px;

        .first-section{
            height: 900px;
            background: url(${imgBgDesktopSectionOne}) no-repeat;
            background-position: right -480px top 0px;
            background-size: 741px 739px;
        }

        .third-section{
            height: 920px;
            background: url(${imgComputerDesktopSectionThree}) no-repeat;
            background-position: left -280px top 180px;
            background-size: 741px 600px;
        }
    }

    @media(min-width: 1201px){
        margin-top: 150px;

        .first-section{
            height: 900px;
            background: url(${imgBgDesktopSectionOne}) no-repeat;
            background-position: right -400px top 0px;
            background-size: contain;
        }

        .third-section{
            height: 990px;
            background: url(${imgComputerDesktopSectionThree}) no-repeat;
            background-position: left -330px top 60px;
            background-size: 1130px 912px;
        }
    }


`;

export const ContentFirstSection = styled.div`
    display: flex;
    flex-direction: column;

    .firstSection-first-block{
        display: flex;
        align-items: center;
        justify-content: center;
        h1 {
            color: var(--blue-400);
            font-weight: 600;
        }
    }

    .firstSection-second-block{
        margin-top: 390px;
        display: flex;
        flex-direction: column;

        h1 {
            font-weight: 600;
            color: var(--blue-400);
        }

        p {
            margin-top: 16px;
            font-weight: 300;
            line-height: 27px;
            color: var(--gray-300);
            font-size: 16px;
        }

    }

    .firstSection-third-block{
            display: flex;
            flex-direction: column;

            h1 {
                font-size: 28px;
                color: var(--blue-400);
                font-weight: 600;
            }

            p {
                margin-top: 16px;
                font-weight: 300;
                line-height: 27px;
                color: var(--gray-300);
            }
        }

    
    @media(max-width: 900px){
       
        background: url(${imgBgSectionOne}) no-repeat;
        background-position: top 60px center;

        .firstSection-first-block{
            h1 {
                font-size: 28px;
            }
        }

        .firstSection-second-block{
            margin-top: 390px;
            align-items: center;

            h1 {
                font-size: 28px;
                text-align: center;
                max-width: 240px;
            }

            p {
                max-width: 300px;
                text-align: center;                
            }

        }

        .firstSection-third-block{
            margin-top: 40px;
            align-items: center;
            

            h1 {
                max-width: 200px;
                text-align: center;
                
            }

            p {
                max-width: 300px;
                text-align: center;
            }
        }
    }

    @media(min-width: 901px){
        display: flex;
        .firstSection-first-block{
            h1 {
                font-size: 40px;
            }
        }

        .firstSection-second-block{
            margin-top: 60px;
            padding-left: 150px;

            h1 {
                font-size: 28px;
                text-align: justify;
                max-width: 500px;
            }

            p {
                max-width: 500px;
                text-align: justify;
            }

        }

        .firstSection-third-block{
            margin-top: 66px;
            padding-left: 150px;

            h1 {
                max-width: 500px;
                text-align: justify;
            }

            p {
                max-width: 500px;
                text-align: justify;
            }
        }
    }
`;

export const ContentSecondSection = styled.div`

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > div {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background: url(${imgCirclesBgSectionTwo}) no-repeat, linear-gradient(135deg, var(--blue-950) 0%, var(--blue-100) 100%);
        background-size: 800px, contain;
        border-radius: 0px 100px;
        position: relative;
    }

    .bg-phone-second-section{
        position: absolute;
        background: url(${imgPhoneBgSectionTwo}) no-repeat;
        background-position: center;
    }

    .second-section-text{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;  

        h1 {
            font-size: 40px;
            font-weight: 600;
            color: var(--white); 
        }

        p {
            margin-top: 12px;
            max-width: 300px;
            color: var(--white);
            line-height: 27px;
            font-weight: normal;
            font-size: 16px;
        }

    }

    @media(max-width: 900px){       
        margin-top: 270px;

        > div {
            background-position: bottom 180px center, 0 0;
            height: 624px;

            .bg-phone-second-section{
                height: 420px;
                width: 400px;
                background-size: cover;
                top: -210px;
            }

            .second-section-text{

                h1 {
                    text-align: center;
                    margin-top: 180px;
                }

                p {

                    text-align: center;
                }              
            }
        }
    }


    @media(min-width: 901px){

        > div {
            background-position: top -360px left -162px, 0 0;
            height: 400px;

            .bg-phone-second-section{
                height: 540px;
                width: 510px;
                background-size: contain;
                top: -60px;
                left: 30px;
            }

            .second-section-text{ 

                h1 {  
                    text-align: justify;
                    margin-left: 420px;
                    max-width: 300px;
                }

                p {
                    margin-left: 426px;
                    text-align: justify;
                }            
            }
        }
    }

    @media(min-width: 1200px){
        > div {
            h1 {
                max-width: 600px;
            }

            p {
                max-width: 500px;
                margin-left: 390px;
            }
        }
    }
`;

export const ContentThirdSection = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-top: 45px;    
        font-size: 27px; 
        color: var(--blue-400);
        font-weight: 600;
    }

    p{
        font-size: 16px;
        font-weight: 300;
        line-height: 27px;
        margin-top: 18px;
        color: var(--gray-300);
    }

    @media(max-width: 900px){
        margin-top: 75px;

        .bg-computer-third-section{
            background: url(${imgComputerSectionThree}) no-repeat;
            background-position: center;
            width: 100%;
            height: 360px;    
        }

        h1 {      
            text-align: center;
        }

        p {
            text-align: center;
            max-width: 300px;
        }
    }

    @media(min-width: 901px){
        margin-top: 240px;
        align-items: flex-end;
        padding-right: 100px;        

        h1 {
            text-align: justify;
        }

        p {
            text-align: justify;
            max-width: 390px;
            color: var(--gray-300);
        }
    }

    @media(min-width: 1240px){
        p{
            max-width: 500px;
        }
    }
`;