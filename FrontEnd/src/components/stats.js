import React, { useEffect, useState } from "react";
import { getStats } from "../services/services.js";

function StatsComponet() {
    const [stats, setStats] = useState([]);
    console.log(stats);

    const getData = () => {
        getStats().then((res) => {
            setStats(res.data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center m-4">
                <div className="text-center text-dark">
                    <h3 className="text-uppercase">ENERO - ABRIL 2023</h3>
                </div>
            </div>

            {stats.total === 0 ? (
                <h1>Esperando al Servidor espere un momento...</h1>
            ) : (
                <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-2 shadow h-100 py-2 border-success">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="small text-success">
                                            Estudiantes Nacionales
                                        </div>
                                        <div className="small">
                                            Estudiantes ciudadanos o residentes del país
                                        </div>
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Nacionales:{" "}
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {stats?.nacional}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-2 shadow h-100 py-2 border-warning">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="small text-warning">
                                            Estudiantes Extranjeros
                                        </div>
                                        <div className="small">
                                            Estudiantes provenientes de otro pais
                                        </div>
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Extranjeros:{" "}
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {stats?.extranjero}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-warning"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-2 shadow h-100 py-2 border-primary">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="small text-primary">
                                            Estudiantes Tranferidos
                                        </div>
                                        <div className="small">
                                            Estudiantes provenientes de otra universidad
                                        </div>
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Tranferidos:{" "}
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {stats?.transferido}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-2 shadow h-100 py-2 border-danger">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="small text-danger">
                                            Total de estudiantes
                                        </div>
                                        <div className="small">
                                            Total de estudiantes en el proceso de admision
                                        </div>
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                            TOTAL:{" "}
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {stats?.total}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-danger"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-2 shadow h-100 py-2 border-primary">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="small text-primary">Completos</div>
                                        <div className="small">
                                            Estudiantes que han entregados todos sus documentos
                                        </div>
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            COMPLETOS:{" "}
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {stats?.completos}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-2 shadow h-100 py-2 border-danger">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="small text-danger">Incompletos</div>
                                        <div className="small">
                                            Estudiantes que no han entregado todos sus documentos
                                        </div>
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                            INCOMPLETOS:{" "}
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {stats?.incompletos}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-danger"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default StatsComponet;
