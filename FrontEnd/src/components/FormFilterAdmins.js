import React from "react";

const FormFilterAdmins = ({estatus, busqueda, setEstatus, setBusqueda}) => {
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
                id="activoRadio"
                value="activo"
                checked={estatus === "activo"}
                onChange={(e) => setEstatus(e.target.value)}
              />
              <label className="form-check-label" htmlFor="activoRadio">
                Activos
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inactivoRadio"
                id="inactivoRadio"
                value="inactivo"
                checked={estatus === "inactivo"}
                onChange={(e) => setEstatus(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inactivoRadio">
                Inactivos
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

export default FormFilterAdmins;
