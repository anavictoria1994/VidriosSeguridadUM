import React from 'react'

const Contacto = () => {
    return (   
        <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail">Correo Electrónico</label>
            <input type="email" class="form-control" id="inputEmail" ></input>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPhone">Número telefónico</label>
            <input type="text" class="form-control" id="inputPhone" ></input>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Dirección</label>
          <input type="text" class="form-control" id="inputAddress"></input>
        </div>
        <div class="form-group">
          <label for="inputDescripción">Descripción</label>
          <input type="text" class="form-control" id="inputDescripción"></input>
        </div>
        <button type="submit" class="btn btn-primary">Enviar cotización</button>
      </form>
    )
}

export default Contacto