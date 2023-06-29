/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { getAdmins } from '../services/services.js'

function TableAdmins() {
    const [estatus, setEstatus] = useState('');
    const [busqueda, setBusqueda] = useState('');
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetchAdmins = () => {
            getAdmins(estatus, busqueda)
                .then(response => {
                    setAdmins(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        };

        fetchAdmins();
    }, [estatus, busqueda]);


    return (
        <div className="mt-5 container custom-table-size">
            <div className="container-fluid px-4">
                <div className="card">
                    <div className="card-header d-flex align-items-center flex-row">
                        <i className="fas fa-table me-1 mr-auto"></i>
                        <span>Administradores</span>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <button className="btn btn-success m-1">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                    <button className="btn btn-warning m-1">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="btn btn-danger m-1">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                    <button className="btn btn-primary m-1">
                                        <i className="fas fa-envelope"></i>
                                    </button>
                                </div>
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
                                                        checked={estatus === 'activo'}
                                                        onChange={e => setEstatus(e.target.value)}
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
                                                        checked={estatus === 'inactivo'}
                                                        onChange={e => setEstatus(e.target.value)}
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
                                                        checked={estatus === 'todos'}
                                                        onChange={e => setEstatus(e.target.value)}
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
                                                        onChange={e => setBusqueda(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr />
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"><td><input className="form-check-input" type="checkbox" /></td></th>
                                        <th scope="col">Nombres</th>
                                        <th scope="col">Apellidos</th>
                                        <th scope="col">Correo</th>
                                        <th scope="col">Telefono</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Estatus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        admins && admins.map(admins => (
                                            <tr key={admins.idAdministrador}>
                                                <td><input className="form-check-input" type="checkbox" /></td>
                                                <td>{admins.nombresAdministrador}</td>
                                                <td>{admins.apellidosAdministrador}</td>
                                                <td>{admins.correoAdministrador}</td>
                                                <td>{admins.telefonoAdministrador}</td>
                                                <td>{admins.rolAdmistrador}</td>
                                                <td>{admins.estatusAdministrador}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>

                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center text-success">
                                    <li className="page-item"><a className="page-link text-success" href="#">Atras</a></li>
                                    <li className="page-item"><a className="page-link text-success" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link text-success" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link text-success" href="#">Siguiente</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="card-footer d-flex align-items-center flex-row"></div>
                </div>
            </div>
        </div>

    );
}

export default TableAdmins;
