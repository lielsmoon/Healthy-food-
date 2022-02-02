import React from "react";
import "./loginPage.css";

const LoginPage = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="left">
                    <div className="login">Регистрация</div>
                    <div className="eula">
                        Входя в систему, вы соглашаетесь на смехотворно длинные
                        условия, которые вы не удосужились прочитать
                    </div>
                </div>
                <div className="right">
                    <div className="form">
                        <label className="field__name" htmlFor="email">
                            Email
                        </label>
                        <input className="field" type="email" id="email" />
                        <label className="field__name" htmlFor="password">
                            Пароль
                        </label>
                        <input
                            className="field"
                            type="password"
                            id="password"
                        />

                        <section className="license">
                            <input
                                id="agree-terms-conditions"
                                type="checkbox"
                            />
                            <label
                                className="license__label"
                                htmlFor="agree-terms-conditions"
                            >
                                Подтвердить лицензионное соглашение
                            </label>
                        </section>

                        <input
                            className="btn"
                            type="submit"
                            id="submit"
                            value="Зарегистрироваться"
                        />
                        <div>
                            Еще нет аккаунта? <a href="#">Зарегистрироваться</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
