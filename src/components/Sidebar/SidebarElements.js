import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaTimes } from "react-icons/fa"

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #cb2d4e;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-ease-out;
    right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

    @media screen and (max-width: 400px) {
        width: 100%
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-style: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 80px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-family: "Lobster", cursive;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    color: #FFF;
    cursor: pointer;

    &:hover {
        color: #ebd8a5;
        transition: 0.2s ease-in-out;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(Link)`
    background: #cb2d4e;
    white-space: nowrap;
    padding: 16px 64px;
    color: #FFF;
    font-size: 26px;
    font-family: "Lobster", cursive;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #ebd8a5;
        color: #010606;
    }
`