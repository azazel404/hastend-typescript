import React, { Component, ReactNode } from "react";
import Tooltip from '@material-ui/core/Tooltip';
import "./index.scss";

//interface function void
interface Props {
    menuVisibleDesktop: boolean,
    children: ReactNode,
    nameCompany : string
}


export default class SecondSideNavigation extends Component<Props>{
    render() {
        const { menuVisibleDesktop, children, nameCompany } = this.props;
        return (
            <>
                <div className={menuVisibleDesktop ? 'second-sidenav second-sidenav-16' : 'second-sidenav'}>
                    {/* first-nav customer/company name */}
                    <div className='customer-logo'>
                        <Tooltip title='Weefer'>
                            <span>{nameCompany}</span>
                        </Tooltip>
                    </div>
                    {/* first-nav customer/company name end */}

                    {/* first-nav navigation menu */}
                    <div className='sidenav-menu'>{children}</div>
                    {/* first-nav navigation menu end */}
                </div>
            </>
        )
    }
}