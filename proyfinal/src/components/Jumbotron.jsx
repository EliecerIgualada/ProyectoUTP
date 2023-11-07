import React from 'react'

const Jumbotron = () => {
    const estilo1={background:"#242c36 url(img/fondoUTP.jpg) no-repeat"}
  return (
    <>
        <section className="main-banner" style={estilo1}>
			<div className="container">
				<div className="caption">
					<h2>Administración del inventario de la UTP de la Chorrera </h2>
                    <br />
                    <h3>Aquí puedes encontrar todos los productos registrados en el almacen de la Universidad Tecnológica de Panamá Oeste</h3>
				</div>
			</div>
		</section>
    
    </>
  )
}

export default Jumbotron