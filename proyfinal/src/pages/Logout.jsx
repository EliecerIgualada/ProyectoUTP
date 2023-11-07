import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import sw from 'sweetalert2'
const Logout = ({onLogout}) => {
    const [exit, setExit]=useState(false)
    const close=()=>{
        sessionStorage.clear()
        onLogout() 
        setExit(true)
    }
    if (exit)  return <Navigate to="/"></Navigate>
 return (
    <>
    <section className="login-wrapper">
                <div className="container clase-contenedor">
                        <h4>¿Está seguro de cerrar sessión?</h4>
                         <button type="button" className="btn btn-warning" onClick={close}>Cerrar Sesión</button>  
                    </div>
            </section>
    </>
  )
}

export default Logout