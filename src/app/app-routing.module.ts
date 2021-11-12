import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CreateMedicamentosComponent } from './Pages/create-medicamentos/create-medicamentos.component';
import { UpdateMedicamentosComponent } from './Pages/update-medicamentos/update-medicamentos.component';
import { CreatePromocionesComponent } from './Pages/create-promociones/create-promociones.component';
import { UpdatePromocionesComponent } from './Pages/update-promociones/update-promociones.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-medicamento', component: CreateMedicamentosComponent},
  { path: 'edit-medicamento', component: UpdateMedicamentosComponent},
  { path: 'create-promociones', component: CreatePromocionesComponent },
  { path: 'edit-promociones', component: UpdatePromocionesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
