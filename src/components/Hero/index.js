import { useState } from "react"
import React from 'react'
import NavBar from "../NavBar"
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./HeroElements"

const Hero = () => {

const [isOpen, setIsOpen] = useState(false)

const toogle = () => {
    setIsOpen(!isOpen)
}

    return (
        <HeroContainer>
            <NavBar toogle={toogle}/>
            <Sidebar isOpen={isOpen} toogle={toogle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Delícias da Edi</HeroH1>
                    <HeroP>Doces e Salgados</HeroP>
                    <HeroBtn to={{ pathname: "https://wa.me/5548984719848"}} target="_blank" rel="noopener noreferrer">Peça Já</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero