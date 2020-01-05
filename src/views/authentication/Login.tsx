import React from "react";
import "./authentication.scss";
import TextField from '@material-ui/core/TextField';

const Login: React.FunctionComponent<{}> = props => {
    return (
        <>
           <div className="authentication-container">
                <div className="max-w-lg w-full  overflow-hidden shadow-lg">
                    <div className="px-6 py-6 mx-6 my-6">
                        <div className="font-bold text-xl mb-2 text-center">Login</div>
                    </div>
                    <div className="authentication-login-form">
                        <TextField  label="Username" />
                        <TextField  label="Password" />
                    </div>
                    <div className="authentication-login-button">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login
                        </button>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Login;