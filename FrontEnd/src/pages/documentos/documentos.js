import React from 'react';
import Footer from '../../components/footer.js';
import Header from '../../components/header.js';
import Sidebar from '../../components/sidebar.js';
import DocumentosEstudiantes from '../../components/docsStudents.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/styles/styles.css'


function documentos(){
    return (
        <div className='sb-nav-fixed'>
            <Header />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <div>
                        <DocumentosEstudiantes />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default documentos;