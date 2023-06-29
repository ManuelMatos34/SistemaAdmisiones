using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SistemaDeAdmisionesAPI.Models;

namespace SistemaDeAdmisionesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministradoresController : ControllerBase
    {
        private readonly AdmisionesContext _dbcontext;

        public AdministradoresController(AdmisionesContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("GetAdmins")]
        public IActionResult GetAdmins(string? radio, string? busqueda)
        {
            var resultado = _dbcontext.Administradores.AsQueryable();

            if (radio == "activo")
            {
                resultado = resultado.Where(r => r.EstatusAdministrador == "activo");

            }
            else if (radio == "inactivo")
            {
                resultado = resultado.Where(r => r.EstatusAdministrador == "inactivo");

            }
            else if (!string.IsNullOrEmpty(busqueda))
            {
                resultado = resultado.Where(r => r.NombresAdministrador.Contains(busqueda));

            }
            else if (radio == "todos")
            {
                resultado = _dbcontext.Administradores.AsQueryable();
            }

            return Ok(resultado.ToList());

        }
    }
}
