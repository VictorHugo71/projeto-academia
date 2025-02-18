import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/funcionario/login.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Injeção de dependências com a função inject
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verifica se o usuário está autenticado
  if (!authService.isAuthenticated()) {
    // Se não estiver autenticado, redireciona para o login
    router.navigate(['/login']);
    return false; // Bloqueia o acesso à rota
  }

  // Caso esteja autenticado, permite o acesso
  return true;
};
