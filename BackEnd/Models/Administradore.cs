using System;
using System.Collections.Generic;

namespace SistemaDeAdmisionesAPI.Models;

public partial class Administradore
{
    public int IdAdministrador { get; set; }

    public string? NombresAdministrador { get; set; }

    public string? ApellidosAdministrador { get; set; }

    public string? CorreoAdministrador { get; set; }

    public string? TelefonoAdministrador { get; set; }

    public string? RolAdmistrador { get; set; }

    public string? EstatusAdministrador { get; set; }

    public virtual Estatus? EstatusAdministradorNavigation { get; set; }

    public virtual Role? RolAdmistradorNavigation { get; set; }
}
