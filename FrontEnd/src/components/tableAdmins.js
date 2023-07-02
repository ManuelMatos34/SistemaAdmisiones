/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { getAdmins } from "../services/services.js";
import TabaleAdminsPagination from "./TabaleAdminsPagination.js";
import ChildTableAdmins from "./ChildTableAdmins.js";
import FormFilterAdmins from "./FormFilterAdmins.js";

function TableAdmins() {
  const [estatus, setEstatus] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [admins, setAdmins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchAdmins = () => {
      getAdmins(estatus, busqueda)
        .then((response) => {
          setAdmins(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchAdmins();
  }, [estatus, busqueda]);

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const paginate = (array, pageNumber, pageSize) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  const paginatedData = paginate(admins, currentPage, itemsPerPage);

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
                  <FormFilterAdmins estatus={estatus} busqueda={busqueda} setEstatus={setEstatus} setBusqueda={setBusqueda}/>
                </div>
              </div>
              <hr />
              <div>
                <ChildTableAdmins admins={admins} paginatedData={paginatedData} />
              </div>
              <TabaleAdminsPagination
                admins={admins}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                currentPage={currentPage}
              />
            </div>
          </div>
          <div className="card-footer d-flex align-items-center flex-row"></div>
        </div>
      </div>
    </div>
  );
}

export default TableAdmins;
