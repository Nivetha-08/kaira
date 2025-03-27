import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <>
        <div className="footer p-5">
            <div className="row">

                <div className="col-md-3">
                    <h3>KAIRA</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit adipisci aliquid itaque. Corporis officiis accusamus, ex recusandae eveniet quam totam fuga magnam ab perspiciatis amet, provident, repellat minus commodi.</p>
                    <div className='p-2 social'>
                        <span><FaFacebook /></span>
                        <span><CiTwitter /></span>
                        <span><CiYoutube /></span>
                        <span><FaPinterest /></span>
                        <span><CiInstagram /></span>
                    </div>
                </div>

                <div className="col-md-3">
                    <div>
                        <h4>QUICK LINKS</h4>
                        <p>HOME</p>
                        <p>ABOUT</p>
                        <p>SERVICES</p>
                        <p>SINGLE TEAM</p>
                        <p>CONTACT</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div>
                        <h4>HELP & INFO</h4>
                        <p>HOME</p>
                        <p>ABOUT</p>
                        <p>SERVICES</p>
                        <p>SINGLE TEAM</p>
                        <p>CONTACT</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div>
                        <h4>CONTACT US</h4>
                        <div className='pt-2'>
                            <p className='text-muted'>Do you have any questions or suggestions?</p>
                            <p>Ccontact@yourcompany.com</p>
                        </div>
                        <div>
                            <p className='text-muted'>DO you need support? Give ua a call.</p>
                            <p>+43 720 22 52 78</p>
                        </div>
                    </div>
                </div>

                <hr className='p-2' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore odit error ipsam, totam nobis eos laudantium accusantium cum asperiores, qui ipsa dolor esse illum autem similique labore voluptatem suscipit quisquam?</p>

            </div>
        </div>
    </>
  )
}

export default Footer