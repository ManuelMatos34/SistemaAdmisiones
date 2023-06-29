using Microsoft.AspNetCore.Mvc;
using SistemaDeAdmisionesAPI.Models;

namespace SistemaDeAdmisionesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutenticacionEstudianteController : ControllerBase
    {
        private readonly AdmisionesContext _dbcontext;

        public AutenticacionEstudianteController(AdmisionesContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("Autenticar")]
        public async Task<IActionResult> Autenticar(string correo)
        {

            Estudiante estudiante = _dbcontext.Estudiantes.FirstOrDefault(e => e.CorreoEstudiante == correo);   

            if (estudiante == null)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "El correo no existe en el sistema");
            }

            return StatusCode(StatusCodes.Status200OK, estudiante);
        }
    }
}
