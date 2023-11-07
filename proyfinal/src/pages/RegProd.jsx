import { useState } from 'react'
import Footer from '../components/Footer'
import axios from 'axios'
import Swa from 'sweetalert2'
import { Navigate } from 'react-router-dom'


const RegProd = () => {
// Inicializar valores
  const valores_iniciales = { 
    codigo_ITEM:"",
    articulo:"",
    size:"",
    unidad:"",
    cantidad:"",
    costoUnitario:"",
    date_created:"",
    color:"",
    tipo:"",
    marca:"",
    total:""
  }

  const [articulo, setArticulo] = useState(valores_iniciales) 
  const [redirect, setRedirect] = useState(false)

// Metodo cuando cambian 
  const onchange = (event)=>{
    setArticulo({...articulo,[event.target.name]:event.target.value})
  }

// Metodo cuando envio
  const onsubmit = async (event)=>{
    event.preventDefault()
    try{
      const url = "http://localhost:8081/inventario"
      const config = { headers:{'Content-Type':'application/json'}}
      const response = await axios.post(url,articulo,config)
      if(response.status==200){
        Swa.fire(
          'Excelente',
          'Se registró el artículo',
          'Succes'
        )
        setRedirect(true)
      }
      else {
        Swa.fire(
          'Erro',
          'No se pudo registrar el usuario',
          'Error'
        )
      }

    }catch(error){
      console.log(error)
    }
  }
  if(redirect){
    return <Navigate to="/ListProd"></Navigate>

  return <>
    <br />
    <h1 className='h111'>Registro de Productos</h1>
    <div className="content">
      <div className="search">
        <a href="" target="_blank" hidden></a>
        <input type="text" name="buscar" placeholder='Buscar....' />
        <div className="autocomplete">
        </div>
        <div className="icon"><i className='fas fa-search'></i></div>
      </div>
    </div>
    <section className="container clase-contenedor">

      <form onSubmit={onsubmit}>
        <div className="contenedor1">
          <div className="contenedor-articulo">
            <label htmlFor="exampleInputText1" className="form-label">Código ITEMS</label>
            <input type="text" name="codigo_ITEM" value={articulo.codigo_ITEM} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
          </div>
          <div className="contenedor-articulo">
            <label htmlFor="exampleInputText1" className="form-label">Artículo </label>
            <input type="text" name="articulo" value={articulo.articulo} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
          </div>
        </div>

        <div className="contenedor1">
          <div className="contenedor-articulo">
            <label htmlFor="exampleInputText1" className="form-label">Tamaño</label>
            <input type="number" name="size" value={articulo.size} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
            <select id="word" name="word">
              <option value="opcion1">Cm</option>
              <option value="opcion2">Pg</option>
              <option value="opcion3">M</option>
              <option value="opcion4">Kg</option>
              <option value="opcion4">L</option>
              <option value="opcion4">G</option>
            </select>
            <label htmlFor="exampleInputText1" className="form-label">Unidad </label>
            <input type="number" name="unidad" value={articulo.unidad} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
          </div>
          <div className="contenedor-articulo">
            <label htmlFor="exampleInputText1" className="form-label">Cantidad</label>
            <input type="number" name="cantidad" value={articulo.cantidad} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
          </div>
        </div>

        <div className="contenedor1">
          <div className="contenedor-articulo">
            <label htmlFor="exampleInputText1" className="form-label">Costo Bl/</label>
            <input type="number" name="costoUnitario" value={articulo.costoUnitario} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
            <label htmlFor="exampleInputText1" className="form-label">$</label>

          </div>
          <div className="contenedor-articulo">
            <label htmlFor="exampleInputText1" className="form-label">Día de Registro</label>
            // <input type="datetime-local" name="date_created" value={articulo.date_created} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
          </div>

        </div>

        <div className="contenedor1">
          <div className="contenedor-articulo">
            <label htmlFor="exampleInputText1" className="form-label">Color </label>
            <input type="text" name="color" value={articulo.color} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
          </div>
          <div className="contenedor-articulo">
            <label htmlFor="exampleInputText1" className="form-label">Tipo</label>
            <input type="text" name="tipo" value={articulo.tipo} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
          </div>
          <div className="contenedor-articulo">
            <label htmlFor="exampleInputText1" className="form-label">Marca</label>
            <input type="text" name="marca" value={articulo.marca} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
          </div>
        </div>
        <div className="contenedor1">
          <div className="contenedor-articulo">
            <label htmlFor="exampleInputText1" className="form-label" >Total</label>
            <input type="number" name="total" value={articulo.total} onChange={onchange} className="form-control" id="exampleInputText1" aria-describedby="textHelp" disabled />
          </div>

        </div>


        <div className="contenedor1">
          <div className="contenedor-articulo">
            <button type="submit" className="btnReg">Guardar</button>
          </div>

        </div>
      </form>

    </section>

    <Footer></Footer>
  </>
};

export default RegProd;
