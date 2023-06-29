import React from 'react';
import { Link } from 'react-router-dom';

function autenticacionForm(){
    return (
        <form>
            <div className="form-floating mb-3">
                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                <label htmlFor="inputEmail">Correo</label>
            </div>                        
            <div className="d-flex align-items-center justify-content-center mt-4 mb-0">
                <Link className="btn btn-success" to="/inicio">Entrar</Link>
            </div>
        </form>
    );
}

export default autenticacionForm;