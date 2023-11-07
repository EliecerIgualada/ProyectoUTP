import React from 'react'

const Steps = () => {
  return (
   <>
   {!sessionStorage.getItem("token") ? (<>
	</>) : (<>
		<section className="features" >
			<div className="container">
				<div className="col-md-3 col-sm-4">
					<div className="features-content">
						<button type="button" className="btn btn-primary">
						Notifications <span className="badge bg-secondary">4</span>
					</button>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-4">
					<div className="features-content">
					<button type="button" className="btn btn-primary">
						Notifications <span className="badge bg-secondary">4</span>
					</button>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-4">
					<div className="features-content">
						<button type="button" className="btn btn-primary">
						Notifications <span className="badge bg-secondary">4</span>
					</button>
					</div>
				</div>
			</div>
		</section>
		</>)}
   </>
  )
}

export default Steps