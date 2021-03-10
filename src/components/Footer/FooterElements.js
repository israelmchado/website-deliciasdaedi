import styled from "styled-components"
import { Link } from "react-router-dom"
import FooterLogoDDA from "../../images/logodda.png"

export const FooterContainer = styled.footer`
    background: #e899a4;
`

export const FooterWrap = styled.div`
    padding: 17px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 16px auto 0 auto;

    @media screen and (max-width:820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    background: url(${FooterLogoDDA});
    background: no-repeat;
    display: flex;
    width: 90px;
    height: 90px;
    align-items: center;

    img { 
        max-width: 90px;
        max-height: 90px;
        cursor: pointer;
    }

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled(Link)`
    color: #FFF;
    font-size: 24px; 

    &:hover {
        color: #cb2d4e;
    }
`

export const FooterRights = styled.small`
    color: #FFF;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 420px) {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        width: 100%;
    }
`
export const FooterDev = styled.small`
    color: #FFF;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
`