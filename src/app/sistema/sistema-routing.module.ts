import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGerenteComponent } from './dashboard-gerente/dashboard-gerente.component';
import { DashboardQaComponent } from './dashboard-qa/dashboard-qa.component';
import { DashboardSuporteComponent } from './dashboard-suporte/dashboard-suporte.component';
import { LayoutComponent } from '../layout/layout.component';
import { PreVisuComponent } from './pre-visu/pre-visu.component';

const routes: Routes = [
  {path:'visu', component: PreVisuComponent},
  { path: 'usuario', 
    component: LayoutComponent, children:[
      {path: 'dashboard-gerente', component: DashboardGerenteComponent},
      {path: 'dashboard-qa', component: DashboardQaComponent},
      {path: 'dashboard-suporte', component: DashboardSuporteComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
