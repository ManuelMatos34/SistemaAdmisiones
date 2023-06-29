using System;
using System.Collections.Generic;

namespace SistemaDeAdmisionesAPI.Models;

public partial class Estudiante
{
    public int IdEstudiante { get; set; }

    public string? NombreCompletoEstudiante { get; set; }

    public string? CorreoEstudiante { get; set; }

    public string? RolEstudiante { get; set; }

    public string? CarreraEstudiante { get; set; }

    public string? EstatusDocumentos { get; set; }

    public string? EstatusEstudiante { get; set; }

    public virtual ICollection<Documento> Documentos { get; set; } = new List<Documento>();

    public virtual EstatusDocumento? EstatusDocumentosNavigation { get; set; }

    public virtual Estatus? EstatusEstudianteNavigation { get; set; }

    public virtual Role? RolEstudianteNavigation { get; set; }
}
