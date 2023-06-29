using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SistemaDeAdmisionesAPI.Models;

namespace SistemaDeAdmisionesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InicioController : ControllerBase
    {
        private readonly AdmisionesContext _dbcontext;

        public InicioController(AdmisionesContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("ObtenerEstatus")]
        public async Task<IActionResult> ObtenerEstatus()
        {
            int countTotal = _dbcontext.Estudiantes.Count();
            int countTransferido = _dbcontext.Estudiantes.Count(e => e.RolEstudiante == "Transferido");
            int countNacional = _dbcontext.Estudiantes.Count(e => e.RolEstudiante == "Nacional");
            int countExtranjero = _dbcontext.Estudiantes.Count(e => e.RolEstudiante == "Extranjero");
            int completos = _dbcontext.Estudiantes.Count(e => e.EstatusDocumentos == "completo");
            int incompletos = _dbcontext.Estudiantes.Count(e => e.EstatusDocumentos == "incompleto");


            if (countTransferido < 0 || countNacional < 0 || countExtranjero < 0 | countTotal < 0 | completos < 0 | incompletos < 0)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Ha ocurrido un error");
            }

            var datos = new
            {
                Total = countTotal,
                Transferido = countTransferido,
                Nacional = countNacional,
                Extranjero = countExtranjero,
                Incompletos = incompletos,
                Completos = completos
            };

            return StatusCode(StatusCodes.Status200OK, datos);
        }
    }
}
