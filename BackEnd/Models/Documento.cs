using System;
using System.Collections.Generic;

namespace SistemaDeAdmisionesAPI.Models;

public partial class Documento
{
    public int IdArchivo { get; set; }

    public string? NombreArchivo { get; set; }

    public string? DireccionArchivo { get; set; }

    public int? IdEstudiante { get; set; }

    public virtual Estudiante? IdEstudianteNavigation { get; set; }
}
