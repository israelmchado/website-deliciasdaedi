import styled from "styled-components"
import ImgBg from "../../images/ddabg.jpg"
import { Link } from "react-router-dom"


export const HeroContainer= styled.div`
    background: linear-gradient(to right, rgba(238,156,167), rgba(0,0,0,0.1)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`

export const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) /2);
`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #FFF;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    font-family: "Dancing Script", sans-serif;
    margin-bottom: 1rem;
    box-shadow: 3px 5px #cb2d4e;
    letter-spacing: 4px; 
`

export const HeroP  = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
    font-family: "Lobster", cursive ;
`

export const HeroBtn = styled(Link)`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #cb2d4e;
    color: #FFF;
    transition: 0.2s ease-out;
    text-decoration: none;

    &:hover {
        background: #ebd8a5;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000
    }   
`