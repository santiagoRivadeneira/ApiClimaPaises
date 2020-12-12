import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'


function App() {

    //state del fomulario
    const [busqueda, guardarBusqueda] = useState({
        ciudad : '',
        pais : ''
   }); 

   const [consultar, guardarConsultar] = useState(false);
   const [resultado ,guardarResultado] = useState({});
   const [error, guardarError] = useState(false);


   //extraemos datos el objeto busqueda
   const { ciudad, pais } = busqueda;



  //Use effect
  useEffect (() =>{
        const consultarAPI = async () => {
          if(consultar){
            const appId = '239b16ba5790c22f6dd34d0bb6a1ca55';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
           
            guardarResultado(resultado);
            guardarConsultar(false);
        
            //detectar si hubo resultados correctos en la consulta
            if(resultado.cod === "404"){
              guardarError(true);
            }else{
              guardarError(false);
            }
          }
        }

        consultarAPI()
    //eslint-disable-next-line
  },[consultar])

  let componente;
  
  if(error){
    componente = <Error mensaje="no hay resultados"/>
  }else{
     componente = <Clima 
         resultado = {resultado}
     />
  }




    return (
        <Fragment>
            <Header 
              titulo={"Clima React app"}
            />
        
        
          <div className="contenedor-form">
               <div className="container">
                  <div className="row">
                      <div className="col m6 s12">
                          <Formulario 
                            busqueda={busqueda}
                            guardarBusqueda={guardarBusqueda}
                            guardarConsultar={guardarConsultar}
                          />
                      </div>
                      <div className="col m6 s12">
                          {componente}
                      </div>
                  </div>
               </div>
          </div>

        </Fragment>

    )
}

export default App;
