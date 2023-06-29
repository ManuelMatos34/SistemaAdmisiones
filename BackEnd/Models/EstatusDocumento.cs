using System;
using System.Collections.Generic;

namespace SistemaDeAdmisionesAPI.Models;

public partial class EstatusDocumento
{
    public string EstatusDocumentos { get; set; } = null!;

    public string? Descripcion { get; set; }

    public virtual ICollection<Estudiante> Estudiantes { get; set; } = new List<Estudiante>();
}
