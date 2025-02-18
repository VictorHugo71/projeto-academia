import { Component } from '@angular/core';
import { MostrarMembroService } from '../../../services/membro/mostrar-membro.service';

@Component({
  selector: 'app-mostrar-membro',
  templateUrl: './mostrar-membro.component.html',
  styleUrls: ['./mostrar-membro.component.css']
})
export class MostrarMembroComponent {
  cpf: string = '';
  membro: any | null = null;
  mensagemErro: string = '';
  mensagem: string = '';
  modoEdicao: boolean = false; // Controle para exibir ou ocultar o formulário de edição

  constructor(private showMembroService: MostrarMembroService) {}

  pesquisarMembro(): void {
    this.showMembroService.getMembroPorCpf(this.cpf).subscribe(
      (data) => {
        if (data.mensagem) {
          this.mensagemErro = data.mensagem;
          this.membro = null;
        } else {
          this.membro = data;
          this.mensagemErro = '';
        }
      },
      (error) => {
        this.mensagemErro = 'Erro ao buscar membro. Tente novamente.';
        this.membro = null;
        console.error(error);
      }
    );
  }

  excluirMembro() {
    if (confirm('Tem certeza que deseja excluir este membro?')) {
      this.showMembroService.excluirMembro(this.cpf).subscribe(
        (response) => {
          this.mensagem = response.mensagem;
          this.membro = null; // Remove o membro da visualização
        },
        (error) => {
          this.mensagem = 'Erro ao excluir o membro.';
          console.error(error);
        }
      );
    }
  }

  atualizarMembro(): void {
    if (this.membro) {
      console.log('Dados enviados para atualização:', this.membro); // Log dos dados
      this.showMembroService.atualizarMembro(this.membro).subscribe(
        (response) => {
          console.log('Resposta do servidor:', response); // Log da resposta
          this.mensagem = response.mensagem || 'Membro atualizado com sucesso.';
          this.modoEdicao = false; // Fecha o modo de edição
        },
        (error) => {
          console.error('Erro ao atualizar membro:', error); // Log de erro
          this.mensagemErro = 'Erro ao atualizar o membro.';
        }
      );
    }
  }
  
  

  toggleEditar(): void {
    this.modoEdicao = !this.modoEdicao; // Alterna entre exibir ou ocultar o formulário de edição
  }

  cancelarEdicao(): void {
    this.modoEdicao = false; // Fecha o modo de edição sem salvar alterações
  }
}
