import './auth.css'
import LoginForm from '../components/login/LoginForm'
import Logo from '../assets/Made/MadeLogo.png'
const LoginPage = () => {
  return (
    <div className='container'>
      <div className='container-form'>
        <div className='image-container'>
          <img className='login-logo' src={Logo} alt="Login" />
        </div>
        <div className='form-inputs'>
        <h1 className='title'>Bienvenido, Inicia Sesion.</h1>
        <p className='text-p'>Ingresa tus credenciales</p>
        <LoginForm/>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
