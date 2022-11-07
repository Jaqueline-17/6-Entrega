
using bsapi.Model;

namespace bsapi.Repository
{
    public interface IDestinoRepository
    {
        Task<IEnumerable<Destinos>> GetDestinos();

        Task<Destinos> GetDestinoById(int id);

        void AddDestino(Destinos destinos);

        void AtualizarDestino(Destinos destinos);

        void RemoverDestino(Destinos destinos);

        Task<bool> SaveChangesAsync();
    }
}