import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Icons from './Components/Icons'
import Card from './Components/Card'
import './App.css'
import Classic from './Components/Classic'
import Oneimg from './Components/Oneimg'
import Complement from './Components/Complement'
import Companies from './Components/Companies'
import Form from './Components/Form'
import Images from './Components/Images'
import Footer from './Components/Footer'
import Best from './Components/Best'
import Like from './Components/Like'
import Blog from './Components/Blog'
import ProductList from './Components/ProductList'


const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Icons />
      <Card />
      <ProductList />
      <Classic />
      <Best />
      <Oneimg />
      <Complement />
      <Like />
      <Blog />
      <Companies />
      <Form />
      <Images />
      <Footer />
    </>
  )
}

export default App