import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements"

const Sidebar = ({ isOpen, toogle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/doces">Doces</SidebarLink>
                <SidebarLink to="/salgados">Salgados</SidebarLink>
                <SidebarLink to="/about-us">Sobre Nós</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to={{ pathname: "https://wa.me/5548984719848"}} target="_blank" rel="noopener noreferrer">Peça Já</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}
export default Sidebar
