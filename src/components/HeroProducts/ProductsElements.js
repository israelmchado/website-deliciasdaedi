import styled from "styled-components"
import { Link } from "react-router-dom"

export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: #e899a4;
    color: #FFF;
`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`

export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #cb2d4e;
`

export const ProductsHeading = styled.h1`
    font-size: 50px;
    text-align: center;
    margin-bottom: 5rem;
    font-family: "Dancing Spirit", cursive;
`

export const ProductTitle = styled.h2`
    font-weight: 600;
    font-size: 1.9rem;
    font-family: "Josefin Sans", cursive;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 19px;
`


export const ProductButton = styled(Link)`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #E31837;
    color: #FFF;
    transition: 0.2s ease-out;
    text-decoration: none;

    &:hover {
        background: #ebd8a5;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`