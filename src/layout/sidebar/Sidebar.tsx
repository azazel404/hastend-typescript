import React, { Component, ReactNode } from "react";
import Icon from '@material-ui/core/Icon';
import "./index.scss";

//interface function void
interface Props {
    toggleMenuVisibleMobile: () => void,
    menuVisibleMobile: boolean,
    toggleMenuVisibleDesktop: () => void,
    menuVisibleDesktop: boolean,
    children: ReactNode,
}


export default class Sidebar extends Component<Props>{
    render() {
        const { toggleMenuVisibleMobile, menuVisibleMobile, toggleMenuVisibleDesktop, menuVisibleDesktop, children } = this.props;
        return (
            <>
                <div onClick={toggleMenuVisibleMobile} className={menuVisibleMobile ? 'sidenav-overlay sidenav-overlay-show' : 'sidenav-overlay'}></div>
                {/* overlay sidenav end*/}
                <div className={menuVisibleMobile ? 'sidenav sidenav-show-mobile' : 'sidenav'}>
                    {/* icon for toggle navigation on desktop */}
                    <Icon className={menuVisibleDesktop ? 'toggle-menu-icon to-right' : 'toggle-menu-icon'} onClick={toggleMenuVisibleDesktop}>{menuVisibleDesktop ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}</Icon>
                    {/* icon for toggle navigation on desktop end */}
                    {children}
                </div>
            </>
        )
    }
}