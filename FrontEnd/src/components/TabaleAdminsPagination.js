/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const TabaleAdminsPagination = ({admins, handlePrevious, handleNext, currentPage}) => {
    const itemsPerPage = 10;
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center text-success">
          <li className="page-item">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="page-link text-success"
            >
              Atrás
            </button>
          </li>
          <button className="page-link text-success" disabled>
            {currentPage}
          </button>
          <li className="page-item">
            <button
              onClick={handleNext}
              disabled={currentPage === Math.ceil(admins.length / itemsPerPage)}
              className="page-link text-success"
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TabaleAdminsPagination;
