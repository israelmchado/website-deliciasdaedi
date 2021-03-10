import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import ImgLogo from "../../images/logodda.png"

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`

export const NavLink = styled(Link)`
    background-image: url(${ImgLogo});
    background: no-repeat;
    display: flex;
    width: 150px;
    height: 150px;
    align-items: center;
    

    img { 
        max-width: 150px;
        max-height: 150px;
        cursor: pointer;
    }

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 30px;
    right: 0;
    cursor: pointer;
    color: #FFF;
    
    p {
        transform: translate(-175%, 100%);
        font-family: "Bebas Neue", cursive;
        font-size: 1.4rem;
    }
`

export const Bars = styled(FiMenu)`
    font-size: 2rem;
    transform: translate(-50%, -15%)
`   