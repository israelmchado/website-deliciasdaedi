import styled from "styled-components"
import AboutDDA from "../../images/aboutdda.jpg"

export const AboutContainer = styled.div`
    background: linear-gradient(to bottom, rgba(238,156,167), rgba(0,0,0,0.1)), url(${AboutDDA});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    text-align: left;
    padding: 0 1rem;


    h1 {
        font-size: 100px;
        font-family: "Dancing Spirit", cursive;
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
        font-family: "Josefin Sans", cursive;
    }

`
