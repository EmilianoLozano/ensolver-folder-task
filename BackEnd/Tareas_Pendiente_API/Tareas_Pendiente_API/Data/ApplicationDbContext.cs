
using Microsoft.EntityFrameworkCore;
using Models;

namespace WebApiTask
{

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        // generar la tabla en la base de datos de la clase autor
        public DbSet<PendingTask> PendingTask { get; set; }
        public DbSet<Folder> Folders { get; set; }




    }
}
