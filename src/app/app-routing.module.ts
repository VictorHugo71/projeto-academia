import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { MostrarMembroComponent } from './components/mostrar-membro/mostrar-membro.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroMembroComponent } from './components/cadastro-membro/cadastro-membro.component';
import { PlanosComponent } from './components/planos/planos.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},  // Protege a rota
  {path: 'cadastroMembro', component: CadastroMembroComponent, canActivate: [authGuard]},
  {path: 'perfil-membro', component: MostrarMembroComponent, canActivate: [authGuard]},
  {path: 'planos', component: PlanosComponent, canActivate: [authGuard]},
  {path: '404', component: Pagina404Component},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
