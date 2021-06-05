import React from 'react';
import './style.css';
import { RiUser3Line, RiLockPasswordLine, RiLoginBoxLine } from 'react-icons/ri';

const SignIn = () => {
    return (
        <div className="container">
            <div className="box">
                <h1>Login</h1>
                <div className="w-full px-8">
                
                    <div className="input-area">
                        <RiUser3Line width="24" />
                        <input type="email" placeholder="Digite seu email" required/>
                    </div>

                    
                    <div className="input-area">
                        <RiLockPasswordLine width="24" />
                        <input type="password" placeholder="Digite sua senha" required/>
                    </div>

                    <div className="mt-4 mb-2 flex justify-center">
                        <button className="btn btn-blue">
                            <RiLoginBoxLine />
                            Acessar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;