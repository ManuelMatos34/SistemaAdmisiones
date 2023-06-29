/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import unphuImage from '../assets/images/unphu-logo.webp';

function sidebar() {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="d-flex justify-content-center">
                    <a className="" href="/inicio">
                        <img className="logo-image img-fluid" src={unphuImage} alt="unphu-logo" />
                    </a>
                </div>
                <div className="sb-sidenav-menu">
                    <div className="mt-3 nav">
                        <div className="sb-sidenav-menu-heading">Inicio</div>
                        <a className="nav-link" href="/inicio">
                            <div className="sb-nav-link-icon"><i className="fas fa-home"></i></div>
                            Inicio
                        </a>
                        <div className="sb-sidenav-menu-heading">Herramientas</div>
                        <a className="nav-link collapsed" href="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts1">
                            <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                            Admisiones
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseLayouts1" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/documentos">Documentos</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts2">
                            <div className="sb-nav-link-icon"><i className="fas fa-user-tie"></i></div>
                            Administrador
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseLayouts2" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/admin">Administradores</a>
                                <a className="nav-link" href="/respaldos">Respaldos</a>
                            </nav>
                        </div>
                        <div className="sb-sidenav-menu-heading">Estadisticas</div>
                        <a className="nav-link" href="">
                            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                            Estadisticas
                        </a>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Bienvenido:</div>
                    Administrador
                </div>
            </nav>
        </div>
    );
}

export default sidebar;