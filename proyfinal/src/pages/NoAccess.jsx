import React from 'react'

const NoAccess = () => {
    document.title = "sin acceso"
    return (
        <section className="login-wrapper" style={estilo}>
            <div className="container">
                <div className="caption">
                    <h2>No tiene Acceso</h2>
                    <p>Para entrar a esta pagina debe loguearse!</p>
                </div>
            </div>
        </section>
    )
}

export default NoAccess