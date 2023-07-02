import React from "react";

const DocsFormStudent = ({estatus, busqueda, setEstatus, setBusqueda}) => {
  return (
    <div>
      <form>
        <div className="d-flex justify-content-between">
          <div className="form-inline mt-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estatusRadio"
                id="completoRadio"
                value="completo"
                checked={estatus === "completo"}
                onChange={(e) => setEstatus(e.target.value)}
              />
              <label className="form-check-label" htmlFor="completoRadio">
                Completos
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estatusRadio"
                id="incompletoRadio"
                value="incompleto"
                checked={estatus === "incompleto"}
                onChange={(e) => setEstatus(e.target.value)}
              />
              <label className="form-check-label" htmlFor="incompletoRadio">
                Incompletos
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estatusRadio"
                id="todosRadio"
                value="todos"
                checked={estatus === "todos"}
                onChange={(e) => setEstatus(e.target.value)}
              />
              <label className="form-check-label" htmlFor="todosRadio">
                Todos
              </label>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group">
              <input
                type="text"
                className="form-control text-success"
                placeholder="Buscar"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DocsFormStudent;
