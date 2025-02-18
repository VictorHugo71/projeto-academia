import { Component, ViewEncapsulation } from '@angular/core';
import { FuncionarioService } from '../../../services/funcionario/cadastrar.service'; //serviço de cadastro
import { AuthService } from '../../../services/funcionario/login.service'; //serviço de login
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent {
  mostrarItens1 = false;  // Inicialmente, o conteúdo está escondido
  mostrarItens2 = false;

  alternarVisibilidade1() {
    this.mostrarItens1 = !this.mostrarItens1;
    this.mostrarItens2 = false;
  }

  alternarVisibilidade2() {
    this.mostrarItens2 = !this.mostrarItens2;
    this.mostrarItens1 = false;
  }

  nome:string = '';
  email:string = '';
  senha: string = '';
  mensagemCad: string = '';
  mensagemLog: string = '';

  constructor (private funcionarioService: FuncionarioService, 
    private authService: AuthService,
    private router: Router) {}

  envioCadastro() {
    this.funcionarioService.cadastrarFuncionario(this.nome, this.email, this.senha).subscribe(
      response => {
        this.mensagemCad = response.mensagem;
      },
      error => {
        this.mensagemCad = 'Erro ao cadastrar novo funcionario'
      }
    );
  }

  login() {
    this.authService.login(this.email, this.senha).subscribe(
      response => {
        console.log("Resposta do servidor:", response); // Verifique a estrutura da resposta
        if (response.success) {
          console.log('Login bem-sucedido, redirecionando...');
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home'])
        } else {
          this.mensagemLog = "Credenciais incorretas";
        }
      },
      error => {
        console.error("Erro no serviço de login:", error);
        this.mensagemLog = "Erro na comunicação com o servidor.";
      }
    );
  }
}
  
