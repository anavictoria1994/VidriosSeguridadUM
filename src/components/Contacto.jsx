import React from 'react'

const Contacto = () => {
    return (   
            <div class="form-control">
                <div class="form-row align-items-center">
                    <div className="col-md-4">
                    <label for="" class="formulario__label">Nombre</label>
                    <input type="text" class="formulario__input"></input>
                    </div>
                    <div className="col-md-4">
                    <label for="" class="formulario__label">Correo</label>
                     <input type="text" class="formulario__input"></input>
                    </div>
                </div>
                <div class="form-row align-items-center">
                    <div className="col-md-4">
                    <label for="" class="formulario__label">Telefono</label>
                    <input type="text" class="formulario__input"></input>
                    </div>
                    <div className="col-md-4">
                    <label for="" class="formulario__label">Mensaje</label>
                    <input type="submit" class="formulario__submit"></input>
                    </div>
                </div>
            </div> 
    )
}

export default Contacto