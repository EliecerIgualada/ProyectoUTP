import React from 'react'

const Resume = () => {
  return (
   <>
   <section className="counter">
			<div className="container">
				<div className="col-md-4 col-sm-4">
					<div className="counter-text">
						<span aria-hidden="true" className="icon-briefcase"></span>
						<h3>1000</h3>
						<p>Usuarios Registrados</p>
					</div>
				</div>
				
				<div className="col-md-4 col-sm-4">
					<div className="counter-text">
						<span className="box1"><span aria-hidden="true" className="icon-expand"></span></span>
						<h3>12600</h3>
						<p>Chats Creados</p>
					</div>
				</div>
				
				<div className="col-md-4 col-sm-4">
					<div className="counter-text">
						<span className="box1"><span aria-hidden="true" className="icon-profile-male"></span></span>
						<h3>100+</h3>
						<p>Miebros Felices</p>
					</div>
				</div>
				
				 
			</div>
		</section>
   </>
  )
}

export default Resume;