import { Component } from '@angular/core';
import { MembroCadastroService } from '../../../services/membro/cadastro-membro.service';

@Component({
  selector: 'app-cadastro-membro',
  templateUrl: './cadastro-membro.component.html',
  styleUrl: './cadastro-membro.component.css'
})
export class CadastroMembroComponent {
  nome: string = '';
  endereco: string = '';
  telefone: string = '';
  email: string = '';
  cpf: string = '';
  tipo_contrato: string = '';
  status_pagamento: string = ''; // Valor inicial
  mensagemCad: string = '';
  sucesso: boolean = false; // Define o estado de sucesso ou erro

  membros: any[] = [];
  mensagem: string = '';

  constructor(private mebroCadastroService: MembroCadastroService) {}

  envioCadastro() {
    this.mebroCadastroService.cadastrarMembro(this.nome, this.endereco, this.telefone, this.email, this.cpf, this.tipo_contrato, this.status_pagamento).subscribe(
      response => {
        this.mensagemCad = response.mensagem;
      },
      error => {
        this.mensagemCad = 'Erro ao cadastrar novo membro'
      }
    );
  }
}