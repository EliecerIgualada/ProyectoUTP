import React from 'react'

const NoAccess = () => {
    document.title = "sin acceso"
    return (
        <section className="login-wrapper" style={estilo}>
            <div className="container">
                <div className="caption">
                    <h2>404</h2>
                    <p>Recurso no encontrado</p>
                </div>
            </div>
        </section>
    )
}

export default NoAccess