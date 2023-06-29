/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function header() {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user fa-fw"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="">Settings</a></li>
                        <li><a className="dropdown-item" href="">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="">Salir</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default header;