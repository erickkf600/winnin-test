import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { IFormInputs, schema } from '.'
const LoginView: any = ({ sendForm }: any) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    })
    return (
        <section className="login" data-testid="login">
            <h1 data-testid="login-title">Login</h1>

            <div className="login__form-wrapper">
                <form
                    className="login__form-wrapper-form"
                    data-testid="login-form"
                >
                    <div className="login__form-wrapper-form-control">
                        <label>Email</label>
                        <input
                            type="email"
                            data-testid="email"
                            {...register('email')}
                        />
                        <b className="input-error-msg">
                            {errors.email?.message}
                        </b>
                    </div>
                    <div className="login__form-wrapper-form-control">
                        <label>Senha</label>
                        <input
                            data-testid="password"
                            type="password"
                            {...register('password')}
                        />
                        <b className="input-error-msg">
                            {errors.password?.message}
                        </b>
                    </div>
                    <button
                        type="button"
                        onClick={handleSubmit(sendForm)}
                        className="login__form-wrapper-form-button btn"
                        data-testid="send"
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    )
}

export default LoginView
