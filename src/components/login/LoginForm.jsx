import { User, KeyRound, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { isAxiosError } from 'axios'
import ErrorMessage from '../ErrorMessage'
import { toast } from 'sonner'
import api from '../../config/axios'
const LoginForm = () => {
    const navigate = useNavigate()
    const initialValues = {
        email: '',
        password: ''
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })
    const handleLogin = async (formData) => {
        try {
            const { data } = await api.post(`/auth/login`, formData)
            localStorage.setItem('AUTH_TOKEN', data)
            navigate('/projects')
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.error)
            }
        }
    }
    return (
        <>
            <form
                className="form-container"
                method="POST"
                onSubmit={handleSubmit(handleLogin)}
                noValidate
            >
                <div className="camp">
                    <User className="input-icon " />
                    <input type="email" name="email" id="email" placeholder="email" {...register("email", {
                        required: "El Email es obligatorio",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "E-mail no válido",
                        },
                    })} />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                </div>
                <div className="camp">
                    <KeyRound className='input-icon' />
                    <input type="password" name="password" id="password" placeholder="password" {...register("password", {
                        required: "El Password es obligatorio",
                    })} />
                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                </div>
                <div className="camp">
                    <button type="submit" className="login-button">Login <ArrowRight className='input-icon' /></button>
                </div>
            </form>
        </>

    )
}

export default LoginForm
