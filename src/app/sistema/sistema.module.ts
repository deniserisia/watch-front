import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { PreVisuComponent } from './pre-visu/pre-visu.component';
import { DashboardGerenteComponent } from './dashboard-gerente/dashboard-gerente.component';
import { DashboardQaComponent } from './dashboard-qa/dashboard-qa.component';
import { DashboardSuporteComponent } from './dashboard-suporte/dashboard-suporte.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { FormsModule } from '@angular/forms';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { SistemaComponent } from './sistema/sistema.component';
import { SuporteComponent } from './suporte/suporte.component';




@NgModule({
  declarations: [
    PreVisuComponent,
    DashboardGerenteComponent,
    DashboardQaComponent,
    DashboardSuporteComponent,
    MeuPerfilComponent,
    NotificacaoComponent,
    SistemaComponent,
    SuporteComponent,
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    FormsModule
  ]
})
export class SistemaModule { }
