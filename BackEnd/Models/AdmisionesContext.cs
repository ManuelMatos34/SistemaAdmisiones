using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SistemaDeAdmisionesAPI.Models;

public partial class AdmisionesContext : DbContext
{
    public AdmisionesContext()
    {
    }

    public AdmisionesContext(DbContextOptions<AdmisionesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Administradore> Administradores { get; set; }

    public virtual DbSet<Documento> Documentos { get; set; }

    public virtual DbSet<Estatus> Estatuses { get; set; }

    public virtual DbSet<EstatusDocumento> EstatusDocumentos { get; set; }

    public virtual DbSet<Estudiante> Estudiantes { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Administradore>(entity =>
        {
            entity.HasKey(e => e.IdAdministrador);

            entity.ToTable("administradores");

            entity.Property(e => e.IdAdministrador).HasColumnName("id_administrador");
            entity.Property(e => e.ApellidosAdministrador)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("apellidos_administrador");
            entity.Property(e => e.CorreoAdministrador)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("correo_administrador");
            entity.Property(e => e.EstatusAdministrador)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("estatus_administrador");
            entity.Property(e => e.NombresAdministrador)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombres_administrador");
            entity.Property(e => e.RolAdmistrador)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("rol_admistrador");
            entity.Property(e => e.TelefonoAdministrador)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("telefono_administrador");

            entity.HasOne(d => d.EstatusAdministradorNavigation).WithMany(p => p.Administradores)
                .HasForeignKey(d => d.EstatusAdministrador)
                .HasConstraintName("FK_administradores_estatus");

            entity.HasOne(d => d.RolAdmistradorNavigation).WithMany(p => p.Administradores)
                .HasForeignKey(d => d.RolAdmistrador)
                .HasConstraintName("FK_administradores_roles");
        });

        modelBuilder.Entity<Documento>(entity =>
        {
            entity.HasKey(e => e.IdArchivo).HasName("PK__document__9B696443AD0A947E");

            entity.ToTable("documentos");

            entity.Property(e => e.IdArchivo).HasColumnName("id_archivo");
            entity.Property(e => e.DireccionArchivo)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("direccion_archivo");
            entity.Property(e => e.IdEstudiante).HasColumnName("id_estudiante");
            entity.Property(e => e.NombreArchivo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre_archivo");

            entity.HasOne(d => d.IdEstudianteNavigation).WithMany(p => p.Documentos)
                .HasForeignKey(d => d.IdEstudiante)
                .HasConstraintName("FK_documentos_estudiantes");
        });

        modelBuilder.Entity<Estatus>(entity =>
        {
            entity.HasKey(e => e.Estatus1);

            entity.ToTable("estatus");

            entity.Property(e => e.Estatus1)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("estatus");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("descripcion");
        });

        modelBuilder.Entity<EstatusDocumento>(entity =>
        {
            entity.HasKey(e => e.EstatusDocumentos);

            entity.ToTable("estatus_documentos");

            entity.Property(e => e.EstatusDocumentos)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("estatus_documentos");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("descripcion");
        });

        modelBuilder.Entity<Estudiante>(entity =>
        {
            entity.HasKey(e => e.IdEstudiante).HasName("PK__estudian__E0B2763C8808FBF5");

            entity.ToTable("estudiantes");

            entity.Property(e => e.IdEstudiante).HasColumnName("id_estudiante");
            entity.Property(e => e.CarreraEstudiante)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("carrera_estudiante");
            entity.Property(e => e.CorreoEstudiante)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("correo_estudiante");
            entity.Property(e => e.EstatusDocumentos)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("estatus_documentos");
            entity.Property(e => e.EstatusEstudiante)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("estatus_estudiante");
            entity.Property(e => e.NombreCompletoEstudiante)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nombre_completo_estudiante");
            entity.Property(e => e.RolEstudiante)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("rol_estudiante");

            entity.HasOne(d => d.EstatusDocumentosNavigation).WithMany(p => p.Estudiantes)
                .HasForeignKey(d => d.EstatusDocumentos)
                .HasConstraintName("FK_estudiantes_estatus_documentos");

            entity.HasOne(d => d.EstatusEstudianteNavigation).WithMany(p => p.Estudiantes)
                .HasForeignKey(d => d.EstatusEstudiante)
                .HasConstraintName("FK_estudiantes_estatus");

            entity.HasOne(d => d.RolEstudianteNavigation).WithMany(p => p.Estudiantes)
                .HasForeignKey(d => d.RolEstudiante)
                .HasConstraintName("FK_estudiantes_roles");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Rol).HasName("PK__roles__C2B79D2740C4769F");

            entity.ToTable("roles");

            entity.Property(e => e.Rol)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("rol");
            entity.Property(e => e.DescripcionRol)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("descripcion_rol");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
