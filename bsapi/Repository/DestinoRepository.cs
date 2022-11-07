using bsapi.Database;
using bsapi.Model;
using Microsoft.EntityFrameworkCore;

namespace bsapi.Repository
{
    public class DestinoRepository : IDestinoRepository
    {
        private readonly DestinosContext _context;

        public DestinoRepository(DestinosContext context)
        {
            _context = context;
        }

        public void AddDestino(Destinos destino)
        {
            _context.Add(destino);
        }

        public void AtualizarDestino(Destinos destino)
        {
            _context.Update(destino);
        }

        public async Task<Destinos> GetDestinoById(int id)
        {
            return await _context.Destino.Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Destinos>> GetDestinos()
        {
            return await _context.Destino.ToListAsync();
        }

        public void RemoverDestino(Destinos destinos)
        {
            _context.Remove(destinos);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}