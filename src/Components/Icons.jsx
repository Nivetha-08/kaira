import React from 'react'
import { FaGift } from "react-icons/fa6";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaBoxesPacking } from "react-icons/fa6";
import { RiGlobalFill } from "react-icons/ri";

const Icons = () => {
  return (
    <>
        <div className="icons p-5">
            <div className="row p-5">
                <div className="col-md-3 text-center">
                    <p className='ico'><FaGift /></p>
                    <h3>Book An Appointment</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, distinctio.</p>
                </div>
                <div className="col-md-3 text-center">
                    <p className='ico'><IoStorefrontSharp /></p>
                    <h3>BPick Up In Store</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, distinctio.</p>
                </div>
                <div className="col-md-3 text-center">
                    <p className='ico'><FaBoxesPacking /></p>
                    <h3>Special Packing</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, distinctio.</p>
                </div>
                <div className="col-md-3 text-center">
                    <p className='ico'><RiGlobalFill /></p>
                    <h3>Free Global Returns</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, distinctio.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Icons