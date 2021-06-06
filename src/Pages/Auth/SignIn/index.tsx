import React, { useContext, useState, useEffect } from 'react';
import './style.css';
import { RiUser3Line, RiLockPasswordLine, RiLoginBoxLine } from 'react-icons/ri';
import ISignIn from '../../../Interfaces/ISignIn';
import AuthApi from '../../../Api/AuthApi';
import Swal from '../../../Components/UI/Swal';
import Storage from '../../../Storage';
import { LoadingContext } from '../../../Providers/LoadingProvider';

const SignIn = () => {
    const loading = useContext(LoadingContext);
    const [ formData, setFormData ] = useState<ISignIn>();
    const onChange = (e : any) => {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]:value});
    };

    let submitHandle = async (e : any) => {
        e.preventDefault();
        loading.show();
        let response = await AuthApi.signIn(formData as ISignIn);
        if (response.status !== 200) {
            if (response.status === 401)
                Swal.showSwal('error', 'Usuário ou senha incorretos', '', true);
            else
                Swal.showSwal('error', 'Erro ao autenticar', '', true);
        } else {
            Storage.set('token', response.json.token);
            let responseMe = await AuthApi.me();
            Storage.set('user', responseMe.json);
            Swal.showSwal('success', 'Login realizado com sucesso!', '', true);
            // Redirect to Home
        }
        loading.hide();
    }

    return (
        <div className="content">
            <div className="box">
                <h1>Login</h1>
                <div className="w-full px-8">
                    <form onSubmit={submitHandle}>
                        <div className="input-area">
                            <RiUser3Line width="24" />
                            <input type="email" name="email" placeholder="Digite seu email" onChange={onChange} required/>
                        </div>

                        
                        <div className="input-area">
                            <RiLockPasswordLine width="24" />
                            <input type="password" name="password" placeholder="Digite sua senha" onChange={onChange} required/>
                        </div>

                        <div className="mt-4 mb-2 flex justify-center">
                            <button className="btn btn-blue">
                                Acessar
                                <RiLoginBoxLine />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;