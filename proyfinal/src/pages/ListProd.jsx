import React from "react";

const ListProd = () => {
  return <>
    <br/>
    <h1 className='h111'>Lista de Productos</h1>
    <br/>
      <section className="container Lista-clase-contenedor">
          <div className="Lista-contenedor1">
              <div className="Lista-contenedor-articulo">
              <label htmlFor="exampleInputText1" className="form-label">CODIGO ITEMS</label>
                  <label htmlFor="exampleInputText1" className="form-label">NOMBRE</label>
                  <label htmlFor="exampleInputText1" className="form-label">DESCRIPCION</label>
                  <label htmlFor="exampleInputText1" className="form-label">TOTAL</label>
              </div>
              <button type="button" className="btnList">Actualizar</button>
              <button type="button" className="btnList"><i class="fa-solid fa-trash fa-shake "></i>Borrar</button>
          </div>

          <div className="Lista-contenedor1">
              <div className="Lista-contenedor-articulo">
              <label htmlFor="exampleInputText1" className="form-label">CODIGO ITEMS</label>
                  <label htmlFor="exampleInputText1" className="form-label">NOMBRE</label>
                  <label htmlFor="exampleInputText1" className="form-label">DESCRIPCION</label>
                  <label htmlFor="exampleInputText1" className="form-label">TOTAL</label>
              </div>
              <button type="button" className="btnList">Actualizar</button>
              <button type="button" className="btnList"><i class="fa-solid fa-trash fa-shake "></i>Borrar</button>
          </div>
      </section>
  </>
};

export default ListProd;
