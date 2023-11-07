import { Link } from 'react-router-dom'
const Navbar = (  ) => {
    return (
        <nav className="navbar navbar-default navbar-sticky bootsnav">

            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <Link className="navbar-brand" to="/"><img src="img/logoUTP.png" className="logo" alt="" /></Link>
                </div>

                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li><Link to="/inicio">Inicio</Link></li>
                        {!sessionStorage.getItem("token") ? (<>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Registro</Link></li>
                                 </>) : (<>
                                    <li><Link to="/RegProd">Registrar Productos</Link></li>
                                    <li><Link to="/ListProd">Listado de Productos</Link></li>
                                    <li><Link to="/logout">Cerrar Sesion</Link></li>
                                </>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar