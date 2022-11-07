using Microsoft.AspNetCore.Mvc;
using bsapi.Repository;
using bsapi.Model;

namespace bsapi.Controllers
{
    [ApiController]
    [Route("bsapi/[controller]")]
    public class DestinosController : ControllerBase
    {
        private readonly IDestinoRepository _repositorio;

        public DestinosController(IDestinoRepository repositorio)
        {
            _repositorio = repositorio;
        }

        [HttpGet]
        public async Task<IActionResult> SelecionarTodos()
        {
            var destinos = await _repositorio.GetDestinos();
            return destinos.Any() ? Ok(destinos) : NoContent();
        }

        [HttpPost]
        public async Task<IActionResult> Cadastrar(Destinos destino)
        {
            _repositorio.AddDestino(destino);
            return await _repositorio.SaveChangesAsync()
            ? Ok("Destno Cadastrado!") : BadRequest("Algo deu Errado.");
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> SelecionarPorId(int id)
        {
            var destino = await _repositorio.GetDestinoById(id);
            return destino != null
            ? Ok(destino) : NotFound("Destino não encontrado!");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> AtualizarDestino(int id, Destinos destino)
        {
            var destinoAtual = await _repositorio.GetDestinoById(id);
            if (destinoAtual == null) return NotFound("Esse Destino não Existe!");

            destinoAtual.Cidade = destino.Cidade ?? destinoAtual.Cidade;
            destinoAtual.Descricao = destino.Descricao ?? destinoAtual.Descricao;
            _repositorio.AtualizarDestino(destinoAtual);
            return await _repositorio.SaveChangesAsync()
            ? Ok("Destino Atualizado.") : BadRequest("Algo deu Errado.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ExcluirDestino(int id)
        {
            var destinoAtual = await _repositorio.GetDestinoById(id);
            if (destinoAtual == null) return NotFound("Esse Destino não Existe!");

            _repositorio.RemoverDestino(destinoAtual);
            return await _repositorio.SaveChangesAsync()
            ? Ok("Destino Excluído com Sucesso.") : BadRequest("Algo deu Errado.");
        }

    }
}