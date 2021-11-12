import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { MedicamentosComponent } from './Pages/medicamentos/medicamentos.component';
import { PromocionesComponent } from './Pages/promociones/promociones.component';
import { CreateMedicamentosComponent } from './Pages/create-medicamentos/create-medicamentos.component';
import { UpdateMedicamentosComponent } from './Pages/update-medicamentos/update-medicamentos.component';
import { CreatePromocionesComponent } from './Pages/create-promociones/create-promociones.component';
import { UpdatePromocionesComponent } from './Pages/update-promociones/update-promociones.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    MedicamentosComponent,
    PromocionesComponent,
    CreateMedicamentosComponent,
    UpdateMedicamentosComponent,
    CreatePromocionesComponent,
    UpdatePromocionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
