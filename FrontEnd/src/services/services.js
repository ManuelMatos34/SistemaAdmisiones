import axios from "axios";

export const getStats = () => {
    return axios.get("https://localhost:7063/api/Inicio/ObtenerEstatus")
}

export const getStudents = (estatus, buscador) => {
    return axios.get("https://localhost:7063/api/Documentos/GetStudents", {
        params: {
            radio: estatus,
            busqueda: buscador
        }
    });
};

export const getAdmins = (estatus, buscador) => {
    return axios.get("https://localhost:7063/api/Administradores/GetAdmins", {
        params: {
            radio: estatus,
            busqueda: buscador
        }
    });
};