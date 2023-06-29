import React from 'react';
import AutenticacionForm from '../../components/autenticacionForm.js';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/styles/styles.css'
import unphuAdmisionesImage from '../../assets/images/unphu-admisiones.webp';


function Autenticacion() {
  return (
    <div className="bg-success">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <img src={unphuAdmisionesImage} alt='unphu-admisiones'/>
                    </div>
                    <div className="card-body">
                      <AutenticacionForm />
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <p>¿No tienes una cuenta?<Link to="/registro">Inscribirse</Link></p>
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

export default Autenticacion;