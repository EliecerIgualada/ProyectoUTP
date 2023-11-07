import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom'
const Login = ({onLogin}) => {

    //Valores iniciales
    const valores_iniciales = {
        user: "",
        password: "",
    }
     const [user, setUser]=useState(valores_iniciales)
     const [redirect, setRedirect]=useState(false)

     useEffect(() => {
        if (redirect) {
          onLogin();
        }
      }, [redirect, onLogin]);



    //Cuando cambian
    const onchange=(event)=>{
        setUser({ ...user, [event.target.name]:event.target.value})
    }

    const onsubmit = async(event)=>{
        event.preventDefault()

        try {
            const url = "http://localhost:8081/user/login"
            const data = user
            const config = { headers: { 'Content-Type': 'application/json' } };
            const response = await axios.post(url, data, config);
            if (response.status == 200) {
                setUser(response.data)
                Swal.fire({
                    title: "<strong>Excelente!!</strong>",
                    html: "<i>Te has logeuado</i>",
                    icon: 'success'
                })
                setRedirect(true)
                sessionStorage.setItem("token", response.data.token)
            }
            else
                Swal.fire({
                    title: <strong>Vaya...</strong>,
                    html: "<i>No se pudo registrar el usuario</i>",
                    icon: 'error'
                })

        } catch (error) {
            if (error.response.status == 400)
                Swal.fire({
                    title: "<strong>Vaya...</strong>",
                    html: "<i>Usuario o contraseña invalido</i>",
                    icon: 'error'
                })
        }
    }    
    if (redirect){
             return <Navigate to="/inicio"></Navigate>
        }
            

    return (
        <>
            <section className="login-wrapper">
                <div className="container clase-contenedor">
                        <form onSubmit={onsubmit}>
                            <img className="img-responsive" alt="logo" src="img/logoUTP.png" />
                            <input type="text" className="form-control input-lg" name="user" value={user.user} onChange={onchange} placeholder="Usuario" />
                            <input type="password" className="form-control input-lg" name="password" value={user.password} placeholder="Password"  onChange={onchange} />
                            <center><button type="submit" className="btnInicio">Entrar</button></center>
                            <p>¿No tiene cuenta? <Link to="/register" className='linkColor'>Crear una cuenta</Link></p>
                        </form>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Login