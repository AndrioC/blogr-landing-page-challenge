import styled from 'styled-components'

import imgBgSectionOne from '../../assets/images/illustration-editor-mobile.svg'
import imgBgDesktopSectionOne from '../../assets/images/illustration-editor-desktop.svg'

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

        .first-section{
            height: 900px;
            background: url(${imgBgDesktopSectionOne}) no-repeat;
            background-position: right -480px top 0px;
            background-size: 741px 739px;
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
    

    @media(max-width: 900px){

        z-index: 999;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 270px;

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


    @media(min-width: 901px){
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        > div {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: url(${imgCirclesBgSectionTwo}) no-repeat, linear-gradient(135deg, var(--blue-950) 0%, var(--blue-100) 100%);
            background-position: top -360px left -162px, 0 0;
            background-size: 800px, contain;
            border-radius: 0px 100px;
            height: 400px;
            position: relative;

            .bg-phone-second-section{
                height: 540px;
                width: 510px;
                position: absolute;
                background: url(${imgPhoneBgSectionTwo}) no-repeat;
                background-position: center;
                background-size: contain;
                top: -60px;
                left: 30px;
            }

            .second-section-text{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;                
            }

            h1 {
                font-size: 40px;
                font-weight: 600;
                color: var(--white);    
                text-align: justify;
                margin-left: 420px;
                max-width: 300px;
            }

            p {
                margin-top: 12px;
                margin-left: 426px;
                text-align: justify;
                font-size: 16px;
                line-height: 27px;
                color: var(--white);
                font-weight: normal;
                max-width: 300px;
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