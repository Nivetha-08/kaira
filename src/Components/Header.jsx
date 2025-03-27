import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuArrowBigLeftDash } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header>
        
        <nav id='navbar' className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand h1" href="#">KAIRA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <LuArrowBigLeftDash className='text-dark' id='obtn' />
            </button>
            <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> {/* me-auto/mx-auto/ms-auto  */}

                <li className="nav-item dropdown ndropdown" data-bs-theme='dark'>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    HOME
                  </a>
                  <ul className="dropdown-menu ndropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown ndropdown" data-bs-theme='dark'>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SHOP
                  </a>
                  <ul className="dropdown-menu ndropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown ndropdown" data-bs-theme='dark'>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    BLOG
                  </a>
                  <ul className="dropdown-menu ndropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown ndropdown" data-bs-theme='dark'>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGES
                  </a>
                  <ul className="dropdown-menu ndropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">BLOG</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">WISHLIS(0)</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">WISHLIS(0)</a>
                </li>
                  
              </ul>
              <div className='d-none col-sm me-auto'>
                <span><CiHeart /></span>
                <span><IoMdCart /></span>
              </div>
              <p><CiSearch className='me-auto ' /></p>
            </div>
          </div>
        </nav>

        <div className="offcanvas offcanvas-end" data-bs-theme='dark' tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> {/* me-auto/mx-auto/ms-auto  */}

                <li className="nav-item dropdown ndropdown" data-bs-theme='dark'>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    HOME
                  </a>
                  <ul className="dropdown-menu ndropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown ndropdown" data-bs-theme='dark'>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SHOP
                  </a>
                  <ul className="dropdown-menu ndropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown ndropdown" data-bs-theme='dark'>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    BLOG
                  </a>
                  <ul className="dropdown-menu ndropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown ndropdown" data-bs-theme='dark'>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGES
                  </a>
                  <ul className="dropdown-menu ndropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">BLOG</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">WISHLIS(0)</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">WISHLIS(0)</a>
                </li>
                  
              </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header