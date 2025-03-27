import React from 'react'

const Form = () => {
  return (
    <>
        <div className="form p-5 text-center">
            <h1 className='sign'>SIGN UP FOR OUR NEWSLETTER</h1>
            <input type="text" className='px-5 p-2' placeholder='Your Email Address' /><br></br>
            <button className='btn p-2 border mt-3 bg-dark text-light px-5'>SIGN UP</button>
        </div>
    </>
  )
}

export default Form