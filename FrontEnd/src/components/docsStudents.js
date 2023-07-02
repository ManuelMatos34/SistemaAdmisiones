import React, { useState, useEffect } from "react";
import PdfFile from '../assets/pdf/CV Manuel.pdf';
import { getStudents } from '../services/services.js'
import DocsFormStudent from "./DocsFormStudent";

function DocsStudents() {
    const [estatus, setEstatus] = useState('');
    const [busqueda, setBusqueda] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = () => {
          getStudents(estatus, busqueda)
            .then(response => {
              setStudents(response.data);
            })
            .catch(error => {
              console.error(error);
            });
        };
    
        fetchStudents();
      }, [estatus, busqueda]);

    return (
        <div className="m-3">
            <div className="container-fluid px-4">
                <div className="card">
                    <div className="card-header d-flex align-items-center flex-row">
                        <i className="fas fa-table me-1 mr-auto"></i>
                        <span>Documentos</span>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="custom-left-card">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <DocsFormStudent estatus={estatus} busqueda={busqueda} setEstatus={setEstatus} setBusqueda={setBusqueda}/>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="custom-left-card scrollable-container">
                                        <div className="container-fluid">
                                            {
                                                students && students.map(students => (
                                                    <div key={students.idEstudiante} className="mb-2">
                                                        <div className="card border-2 shadow h-100 border-success">
                                                            <div className="card-body">
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col">
                                                                        <div className="text-xs font-weight-bold text-success text-uppercase m-1">{students.nombreCompletoEstudiante}</div>
                                                                        <div className="small text-success m-1">{students.carreraEstudiante}</div>
                                                                        <div className="small text-success m-1">Estudiante {students.rolEstudiante}</div>
                                                                        <button type="button" className="btn btn-warning btn-sm m-1">Documentos</button>
                                                                        <button type="button" className="btn btn-success btn-sm m-1">Confirmar</button>
                                                                        <button type="button" className="btn btn-danger btn-sm m-1">Denegar</button>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <i className="fas fa-user fa-2x text-success"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="custom-right-card">
                                    <iframe security="true" seamless="true" allowFullScreen="true" allowTransparency="true" src={PdfFile} title="pdf" className="custom-pdf-size"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
        </div>
    );
}

export default DocsStudents;