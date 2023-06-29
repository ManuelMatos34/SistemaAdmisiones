/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function TableRespaldos() {
    return (
        <div className="mt-5 container custom-table-size-backup">
            <div className="container-fluid px-4">
                <div className="card">
                    <div className="card-header d-flex align-items-center flex-row">
                        <i className="fas fa-table me-1 mr-auto"></i>
                        <span>Respaldos</span>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <button className="btn btn-success m-1">
                                        <i className="fas fa-database"></i> 
                                    </button>
                                    <button className="btn btn-primary m-1">
                                        <i className="fas fa-plug"></i> 
                                    </button>
                                </div>
                                <div>
                                    <form>
                                        <div className="d-flex justify-content-between">
                                            <div className="form-inline">
                                                <div className="input-group">
                                                    <input type="date" className="form-control text-success" placeholder="Seleccionar fecha" />
                                                    <button className="btn btn-outline-secondary text-success" type="button">
                                                        <i className="fas fa-search"></i>
                                                    </button>
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
                                        <th scope="col">Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" /></td>
                                        <td>01/04/2023</td>
                                    </tr>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" /></td>
                                        <td>01/04/2023</td>
                                    </tr>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" /></td>
                                        <td>01/04/2023</td>
                                    </tr>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" /></td>
                                        <td>01/04/2023</td>
                                    </tr>
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

export default TableRespaldos;
