import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FcLike } from "react-icons/fc"
import { 
    FooterContainer, 
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    FooterRights,
    FooterDev
} from "./FooterElements"
import FooterLogoDDA from "../../images/logodda.png"


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <img src={FooterLogoDDA} alt="logo" />
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink to={{ pathname: "https://www.instagram.com/ddeliciasdaedi"}} target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink to={{ pathname: "https://wa.me/5548984719848"}} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            <FooterRights>DELÍCIAS DA EDI © 2021 - Todos os direitos reservados</FooterRights>
            <FooterDev>Desenvolvido com<FcLike />Israel Machado</FooterDev>
        </FooterContainer>
    )
}

export default Footer
