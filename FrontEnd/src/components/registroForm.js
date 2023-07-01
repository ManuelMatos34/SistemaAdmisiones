/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function registroForm() {
  return (
    <div>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-floating mb-3 mb-md-0">
              <input
                className="form-control"
                id="inputFirstName"
                type="text"
                placeholder="Jhon Doe"
              />
              <label htmlFor="inputFirstName">Nombre Completo</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <select className="form-select" id="inputLastName">
                <option value="">Selecciona</option>
                <option value="Smith">Extranjero</option>
                <option value="Johnson">Nacional</option>
                <option value="Williams">Transferido</option>
              </select>
              <label htmlFor="inputLastName">Tipo Estudiante</label>
            </div>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="inputEmail"
            type="email"
            placeholder="jhondoe@yopmail.com"
          />
          <label htmlFor="inputEmail">Correo</label>
        </div>
        <div className="mt-4 mb-0">
          <div className="d-grid">
            <a className="btn btn-success btn-block" href="">
              Crear
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default registroForm;
