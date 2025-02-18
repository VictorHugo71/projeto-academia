import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MostrarMembroComponent } from './components/mostrar-membro/mostrar-membro.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroMembroComponent } from './components/cadastro-membro/cadastro-membro.component';
import { PlanosComponent } from './components/planos/planos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MostrarMembroComponent,
    Pagina404Component,
    CadastroMembroComponent,
    HomeComponent,
    PlanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
