import { useState } from 'react'
import Footer from '../components/Footer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom'

 const Reg = () => {
    //Valores iniciales
    const valores_iniciales = {
        user: "",
        password: "",
        name: ""
    }
     const [user, setUser]=useState(valores_iniciales)
     const [redirect, setRedirect]=useState(false)

    //Cuando cambian
    const onchange=(event)=>{
        setUser({ ...user, [event.target.name]:event.target.value})
    }
    
    const onsubmit = async(event)=>{
        event.preventDefault()

        try {
            const url = "http://localhost:8081/user/"
            const data = user
            const config = { headers: { 'Content-Type': 'application/json' } };

            const response = await axios.post(url, data, config);
            if (response.status == 200) {
                //setUser (response.data)
                Swal.fire({
                    title: "<strong>Excelente</strong>",
                    html: "<i>Usuario Registrado Satisfactoramente!</i>",
                    icon: 'success'
                })
                setUser(valores_iniciales)
                setRedirect(true)
            }
            else
                Swal.fire({
                    title: <strong>Vaya...</strong>,
                    html: "<i>No se pudo registrar el usuario</i>",
                    icon: 'error'
                })

        } catch (error) {
            console.log(error)
        }
    }

    if (redirect)
            return <Navigate to="/"></Navigate>


    return (
        <>
            <section className="login-wrapper">
                <div className="container clase-contenedor">
                    <form onSubmit={onsubmit}>
                            <img className="img-responsive" alt="logo" src="img/logoUTP.png" />
                            <input type="text" className="form-control input-lg" name="user" value={user.user} onChange={onchange} placeholder="Usuario" />
                            <input type="password" className="form-control input-lg" name="password" value={user.password} placeholder="Password"  onChange={onchange} />
                            <input type="text" className="form-control input-lg" name="name" value={user.name} placeholder="Nombre"  onChange={onchange} />
                            <center>
                                <button type="submit" className="btnInicio">Registrarse</button>
                            </center>
                        </form>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Reg