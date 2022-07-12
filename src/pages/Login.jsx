import React, {useContext} from 'react';
import MyInput from "../Components/Input/MyInput";
import MyButton from "../Components/Button";
import {AuthContext} from "../Context";

const Login = () => {

    

    return (
        <div>
            <h1>Сторінка входу</h1>
            <form onSubmit={Login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Увійти</MyButton>
            </form>
        </div>
    );
};

export default Login;