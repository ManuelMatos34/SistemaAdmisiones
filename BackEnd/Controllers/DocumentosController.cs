using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaDeAdmisionesAPI.Models;

namespace SistemaDeAdmisionesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentosController : ControllerBase
    {
        private readonly AdmisionesContext _dbcontext;

        public DocumentosController(AdmisionesContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("GetStudents")]
        public IActionResult GetStudents(string? radio, string? busqueda)
        {
            var resultado = _dbcontext.Estudiantes.AsQueryable();

            if (radio == "completo")
            {
                resultado = resultado.Where(r => r.EstatusDocumentos == "completo");

            }else if (radio == "incompleto")
            {
                resultado = resultado.Where(r => r.EstatusDocumentos == "incompleto");

            }else if (!string.IsNullOrEmpty(busqueda))
            {
                resultado = resultado.Where(r => r.NombreCompletoEstudiante.Contains(busqueda));

            }else if (radio == "todos")
            {
                resultado = _dbcontext.Estudiantes.AsQueryable();
            }

            return Ok(resultado.ToList());

        }
    }
}
