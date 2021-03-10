import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from "./globalStyles"
import Hero from "./components/Hero"
import   Products  from "./components/HeroProducts/Doces"
import { productData } from "./components/HeroProducts/Doces/data"
import  ProductsS from "./components/HeroProducts/Salgados"
import { productDataS } from "./components/HeroProducts/Salgados/data"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>  
    <GlobalStyle />
      <Hero />
        <Products path='/doces' heading="Doces" data={productData} />
        <ProductsS path="/salgados" heading="Salgados" data={productDataS} />
      <About />
      <Footer /> 
    </Router>
  );
}

export default App;
