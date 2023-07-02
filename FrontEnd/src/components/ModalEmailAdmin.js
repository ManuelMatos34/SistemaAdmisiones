import React from "react";

const ModalEmailAdmin = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="ModalEmailAdmin"
        tabindex="-1"
        aria-labelledby="AddEmailModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="AddEmailModalLabel">
                Enviar Correo
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form></form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-success">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEmailAdmin;
