import React from 'react';
import RegistroForm from '../../components/registroForm';
import { Link } from 'react-router-dom';
import unphuAdmisionesImage from '../../assets/images/unphu-admisiones.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/styles/styles.css'

function registro() {
    return (
        <div className="bg-success">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header">
                                            <img src={unphuAdmisionesImage} alt='unphu-admisiones'/>
                                        </div>
                                        <div className="card-body">
                                            <RegistroForm />
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small">
                                                <p>Ya tienes una cuenta?<Link to="/">Ingresa aqui!</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default registro;