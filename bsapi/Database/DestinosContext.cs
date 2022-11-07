using bsapi.Model;
using Microsoft.EntityFrameworkCore;

namespace bsapi.Database
{
    public class DestinosContext : DbContext
    {
        public DestinosContext(DbContextOptions<DestinosContext> options) : base(options)
        {

        }

        public DbSet<Destinos> Destino { get; set; } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var destino = modelBuilder.Entity<Destinos>();
            destino.ToTable("destino");
            destino.HasKey(x => x.Id);
            destino.Property(x => x.Id).HasColumnName("id").ValueGeneratedOnAdd();
            destino.Property(x => x.Cidade).HasColumnName("cidade");
            destino.Property(x => x.Descricao).HasColumnName("descricao");
        }
    }
}