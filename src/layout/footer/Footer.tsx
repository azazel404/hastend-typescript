import React,{Component} from "react";
import "./index.scss";

//interface
interface Props {
    footerName : string,
    footerLink : string
}


export default class Footer extends Component<Props>{
    render(){
        const {footerLink,footerName} = this.props;
        return(
            <>
                {/* footer */}
                <div className='footer layout-padding'>
                    &copy; {new Date().getFullYear()} made with <span style={{ fontSize: '16px', color: 'red' }}>&#9829;</span> by{' '}
                    <a href={footerLink} target='_blank' rel='noopener noreferrer'>
                        {footerName}
                    </a>
                </div>
                {/* footer end */}
            </>
        )
    }
}