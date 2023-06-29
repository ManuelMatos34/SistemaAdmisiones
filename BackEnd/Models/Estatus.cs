using System;
using System.Collections.Generic;

namespace SistemaDeAdmisionesAPI.Models;

public partial class Estatus
{
    public string Estatus1 { get; set; } = null!;

    public string? Descripcion { get; set; }

    public virtual ICollection<Administradore> Administradores { get; set; } = new List<Administradore>();

    public virtual ICollection<Estudiante> Estudiantes { get; set; } = new List<Estudiante>();
}
