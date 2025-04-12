import React from 'react'

const Blog = () => {
  return (
    <>
        <div className="blog p-5">
            <h2>READ BLOG POST</h2>

            <div className="row p-0 p-md-5">
                <div className="col-md-3 p-2">
                    <div className="card img-container">
                        <img src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" className='img-fluid' alt="" />
                    </div>
                    <p className='text-muted pt-3'>SHOP</p>
                    <p>$99.00</p>
                </div>
                <div className="col-md-3 p-2">
                    <div className="card img-container">
                        <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" className='img-fluid' alt="" />
                    </div>
                    <p className='text-muted pt-3'>SHOP</p>
                    <p>$55.00</p>
                </div>
                <div className="col-md-3 p-2">
                    <div className="card img-container">
                        <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" className='img-fluid' alt="" />
                    </div>
                    <p className='text-muted pt-3'>SHOP</p>
                    <p>$88.00</p>
                </div>
                <div className="col-md-3 p-2">
                    <div className="card img-container">
                        <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" className='img-fluid' alt="" />
                    </div>
                    <p className='text-muted pt-3'>SHOP</p>
                    <p>$77.00</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog