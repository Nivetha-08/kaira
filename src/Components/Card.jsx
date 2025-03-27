import React from 'react'

const Card = () => {
  return (
    <div className="card p-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card img-container">
                    <img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" className='img-fluid' alt="one" />                                      
                </div>
                <p className='p-2'>SHOP</p>  
            </div>
            <div className="col-md-4 ">
                <div className="card img-container">
                    <img src="https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" className='img-fluid' alt="one" />
                </div>
                <p className='p-2'>SHOP</p>
            </div>
            <div className="col-md-4 ">
                <div className="card img-container">
                    <img src="https://plus.unsplash.com/premium_photo-1661597156656-75ba116e9e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3RzfGVufDB8fDB8fHww" className='img-fluid' alt="one" />
                </div>
                <p className='p-2'>SHOP</p>
            </div>
        </div>
    </div>
  )
}

export default Card