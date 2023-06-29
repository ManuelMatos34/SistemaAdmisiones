using System;
using System.Collections.Generic;

namespace SistemaDeAdmisionesAPI.Models;

public partial class Role
{
    public string Rol { get; set; } = null!;

    public string? DescripcionRol { get; set; }

    public virtual ICollection<Administradore> Administradores { get; set; } = new List<Administradore>();

    public virtual ICollection<Estudiante> Estudiantes { get; set; } = new List<Estudiante>();
}
