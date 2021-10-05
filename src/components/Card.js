import React from "react";
import "./styles/carousel.css";
import "./styles/cards.css";

// function cambiarTitulo(titulo){
//     tituloFormulario = titulo
//     console.log(tituloFormulario)
// }

function Card(props) {

  return (
    <div class="card">
      <div class="card-image">
        <img src={props.image} alt="Responsive image" className="img-fluid" />
      </div>
      <div class="card-body">
        <div class="row" align="left">
          <div class="col">
            <h4 className="card-title">{props.title}</h4>
            <p>{props.desc}</p>
          </div>
        </div>
        <div class="row" align="right">
          <div class="col align-self-end">
            <button
              id={props.id}
              type="button"
              class="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Cotizar
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        {props.cotizar}
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                         Correo electrónico
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                        ></input>
                      </div>
                      <div class="mb-3">
                        <label for="message-text" class="col-form-label">
                          Descripción de su cotización
                        </label>
                        <textarea
                          class="form-control"
                          id="message-text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button                      
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button type="button" class="btn btn-primary"
                     data-bs-dismiss="modal">
                      Enviar Cotización
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
