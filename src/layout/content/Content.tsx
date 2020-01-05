import React, { Component, ReactNode } from "react";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import "./index.scss";

//interface function void
interface Props {
    menuVisibleDesktop: boolean,
    children : ReactNode,
    BreadCrumbMaxItems? : number,
    ListItemBreadCrumbs? : any;
}


export default class Content extends Component<Props>{
    render() {
        const { menuVisibleDesktop, children } = this.props;
        return (
          <>
            <div className={menuVisibleDesktop ? 'content-wrapper content-wrapper-60' : 'content-wrapper'}>
              {/* <div className='content-breadcrumbs'>
                <div className='content layout-padding-breadcrumbs'>
                  <Breadcrumbs maxItems={this.props.BreadCrumbMaxItems}>
                    {this.props.ListItemBreadCrumbs.map((item : any) => {
                        return (
                          <Link color='inherit' href={'/' + item.linkName}>
                            {item.name}
                          </Link>
                        );
                    })}
                  </Breadcrumbs>
                </div>
              </div> */}
              <div className='content-container'>
                <div className='content  layout-padding'>
                  {/* content app */}
                  {children}
                  {/* content app end*/}
                </div>
              </div>
            </div>
          </>
        );
    }
}