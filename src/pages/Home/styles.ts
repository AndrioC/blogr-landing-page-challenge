import styled from 'styled-components'

import imgBgSectionOne from '../../assets/images/illustration-editor-mobile.svg'

import imgPhoneBgSectionTwo from '../../assets/images/illustration-phones.svg'
import imgCirclesBgSectionTwo from '../../assets/images/bg-pattern-circles.svg'

import imgComputerSectionThree from '../../assets/images/illustration-laptop-mobile.svg'

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
    }


`;

export const ContentFirstSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media(max-width: 900px){
       
        background: url(${imgBgSectionOne}) no-repeat;
        background-position: top 60px center;

        .firstSection-first-block{
            h1 {
                font-size: 28px;
                color: var(--blue-400);
                font-weight: 600;
            }
        }

        .firstSection-second-block{
            margin-top: 390px;
            display: flex;
            flex-direction: column;
            align-items: center;

            h1 {
                font-size: 28px;
                color: var(--blue-400);
                font-weight: 600;
                max-width: 240px;
                text-align: center;
            }

            p {
                max-width: 300px;
                text-align: center;
                margin-top: 16px;
                font-weight: 300;
                line-height: 27px;
                color: var(--gray-300);
            }

        }

        .firstSection-third-block{
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;

            h1 {
                font-size: 28px;
                color: var(--blue-400);
                font-weight: 600;
                max-width: 200px;
                text-align: center;
            }

            p {
                max-width: 300px;
                text-align: center;
                margin-top: 16px;
                font-weight: 300;
                line-height: 27px;
                color: var(--gray-300);
            }
        }
    }

    @media(min-width: 901px){
        .firstSection-first-block{
            h1 {
                font-size: 40px;
                color: var(--blue-400);
                font-weight: 600;
            }
        }
    }
`;

export const ContentSecondSection = styled.div`
    

    @media(max-width: 900px){

        z-index: 999;
        margin-top: 270px;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        > div {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            overflow: visible;
            background: url(${imgCirclesBgSectionTwo}) no-repeat, linear-gradient(135deg, var(--blue-950) 0%, var(--blue-100) 100%);
            background-position: bottom 180px center, 0 0;
            background-size: 800px, contain;
            border-radius: 0px 100px;
            z-index: 1;
            height: 624px;
            position: relative;

            .bg-phone-second-section{
                height: 420px;
                width: 400px;
                position: absolute;
                background: url(${imgPhoneBgSectionTwo}) no-repeat;
                background-position: center;
                background-size: cover;
                top: -210px;
            }

            h1 {
                font-size: 40px;
                font-weight: 600;
                color: var(--white);    
                text-align: center;
                margin-top: 180px;
            }

            p {
                margin-top: 12px;
                text-align: center;
                font-size: 16px;
                line-height: 27px;
                color: var(--white);
                font-weight: normal;
                max-width: 300px;
            }
        }
    }

`;

export const ContentThirdSection = styled.div`

    @media(max-width: 900px){
        margin-top: 75px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .bg-computer-third-section{
            background: url(${imgComputerSectionThree}) no-repeat;
            background-position: center;
            width: 100%;
            height: 360px;    
        }

        h1 {
            margin-top: 45px;    
            font-size: 27px; 
            color: var(--blue-400);
            font-weight: 600;
            text-align: center;
        }

        p {
            font-size: 16px;
            font-weight: 300;
            line-height: 27px;
            margin-top: 18px;
            text-align: center;
            max-width: 300px;
            color: var(--gray-300);

        }
    }


`;