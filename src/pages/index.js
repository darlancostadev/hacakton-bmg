import React from "react"
import { Link } from "gatsby"
import "../components/css/style.css"

const IndexPage = () => (
  <>
  <div className="proto-container">
    <img className="img-fundo" src="https://image.freepik.com/fotos-gratis/amigos-batendo-os-punhos-como-um-trabalho-em-equipe_53876-70775.jpg"/>
    
  </div>
  <div className="container">
    <div className="inner">
      <div className="left">
      <img src="https://www.bancobmg.com.br/Site/Content/assets/img/logos/logo-bmg.svg" alt="CompleteUI Logo" className="logo"/>
        <div className="content">
          <h1>Venha fazer parte<span>do nosso time</span> </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam aliquam velit consequat, tempor nisi at, ornare odio.</p> 
          <p className="light">
            Suspendisse quis sapien nisl. Curabitur eget iaculis nulla. 
            Suspendisse at lobortis est. Quisque pharetra quis mauris quis euismod. 
            Praesent aliquet ultrices lectus, sit amet scelerisque nisl.</p>
        </div>
      </div>
      <div className="right">
        <button>Economizar</button>
        <button>+Informações</button>

      </div>
    </div>
  </div>
  <div className="container">
    <div className="box">
      
    </div>
  </div>
  </>
)

export default IndexPage
