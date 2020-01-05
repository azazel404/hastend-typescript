import React, { Component } from "react";
import Icon from '@material-ui/core/Icon';
import "./index.scss"

//interface function void
interface Props {
    toggleMenuVisibleMobile: () => void,
}


export default class Header extends Component<Props>{
    render() {
        const { toggleMenuVisibleMobile } = this.props;
        return (
            <>
                {/* mobile header */}
                <div className='content-header layout-padding'>
                    <Icon onClick={toggleMenuVisibleMobile}>menu</Icon>
                    <Icon>notifications_none</Icon>
                </div>
                {/* mobile header end */}
            </>
        )
    }
}