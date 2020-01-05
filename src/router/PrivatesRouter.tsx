import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../layout/header/Header";
import FirstNavigation from "../layout/firstNavigation/FirstNavigation";
import SecondNavigation from "../layout/secondNavigation/SecondNavigation";
import Content from "../layout/content/Content";
import Sidebar from "../layout/sidebar/Sidebar";



const PrivatesRouter: React.FunctionComponent<{}> = props => {
    const [MenuVisibleDesktop, setMenuvisibleDesktop] = React.useState(false);
    const [MenuVisibleMobile, setMenuVisibleMobile] = React.useState(false);


    const toggleMenuVisibleDesktop = () => {
        setMenuvisibleDesktop(!MenuVisibleDesktop);
    }

    const toggleMenuvisibleMobile = () => {
        setMenuVisibleMobile(!MenuVisibleMobile)
    }

    return (
        <>
            <Sidebar
                menuVisibleDesktop={MenuVisibleDesktop}
                menuVisibleMobile={MenuVisibleMobile}
                toggleMenuVisibleDesktop={toggleMenuVisibleDesktop}
                toggleMenuVisibleMobile={toggleMenuvisibleMobile}
            >
                <FirstNavigation backgroundColor='rgb(2,0,36)' />
                <SecondNavigation nameCompany={'Hastend'} menuVisibleDesktop={MenuVisibleDesktop}>

                </SecondNavigation>
            </Sidebar>
            <Content menuVisibleDesktop={MenuVisibleDesktop}>
                <Header toggleMenuVisibleMobile={toggleMenuvisibleMobile} />
                <Switch>

                </Switch>
            </Content>

        </>
    )
}

export default PrivatesRouter;