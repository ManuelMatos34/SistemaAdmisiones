import React from 'react'

const ChildTableAdmins = ({admins, paginatedData}) => {
  return (
    <div>
        <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <input className="form-check-input" type="checkbox" />
                    </th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Estatus</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.length === 0 ? (
                    <tr>
                      <td colSpan="7">Sin Datos...</td>
                    </tr>
                  ) : (
                    paginatedData.map((admins) => (
                      <tr key={admins.idAdministrador}>
                        <td>
                          <input className="form-check-input" type="checkbox" />
                        </td>
                        <td>{admins.nombresAdministrador}</td>
                        <td>{admins.apellidosAdministrador}</td>
                        <td>{admins.correoAdministrador}</td>
                        <td>{admins.telefonoAdministrador}</td>
                        <td>{admins.rolAdmistrador}</td>
                        <td>{admins.estatusAdministrador}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
    </div>
  )
}

export default ChildTableAdmins
