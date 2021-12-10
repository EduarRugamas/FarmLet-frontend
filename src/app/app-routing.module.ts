import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CreateMedicamentosComponent } from './Pages/create-medicamentos/create-medicamentos.component';
import { UpdateMedicamentosComponent } from './Pages/update-medicamentos/update-medicamentos.component';
import { CreatePromocionesComponent } from './Pages/create-promociones/create-promociones.component';
import { UpdatePromocionesComponent } from './Pages/update-promociones/update-promociones.component';
import { DashboardMedicamentosComponent } from './Pages/dashboard-medicamentos/dashboard-medicamentos.component';
import { DashboardPromocionesComponent } from './Pages/dashboard-promociones/dashboard-promociones.component';
import { EditItemsMedicamentoComponent } from './Pages/edit-items-medicamento/edit-items-medicamento.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dash-medicamentos', component: DashboardMedicamentosComponent },
  { path: 'dash-promociones', component: DashboardPromocionesComponent },
  { path: 'create-medicamento', component: CreateMedicamentosComponent},
  { path: 'edit-medicamento/:id', component: EditItemsMedicamentoComponent},
  { path: 'edit-medicamento', component: UpdateMedicamentosComponent},
  { path: 'create-promociones', component: CreatePromocionesComponent },
  { path: 'edit-promociones/:id', component: UpdatePromocionesComponent },
  { path: 'edit-promociones', component: UpdatePromocionesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ LoginComponent, DashboardComponent, CreateMedicamentosComponent, UpdateMedicamentosComponent, CreatePromocionesComponent, UpdatePromocionesComponent];
