import React from 'react'

const Card = () => {
  return (
    <div className="card p-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card img-container">
                    <img src="https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" className='img-fluid' alt="one" />                                      
                </div>
                <p className='p-2'>SHOP</p>  
            </div>
            <div className="col-md-4 ">
                <div className="card img-container">
                    <img src="https://plus.unsplash.com/premium_photo-1661751776826-0ac0ed5b8424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" className='img-fluid' alt="one" />
                </div>
                <p className='p-2'>SHOP</p>
            </div>
            <div className="col-md-4 ">
                <div className="card img-container">
                    <img src="https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='img-fluid' alt="one" />
                </div>
                <p className='p-2'>SHOP</p>
            </div>
        </div>
    </div>
  )
}

export default Card