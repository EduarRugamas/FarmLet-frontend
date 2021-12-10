import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './Components/table/table.component';
import { DashboardMedicamentosComponent } from './Pages/dashboard-medicamentos/dashboard-medicamentos.component';
import { DashboardPromocionesComponent } from './Pages/dashboard-promociones/dashboard-promociones.component';
import { MenuComponent } from './Components/menu/menu.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CardComponent } from './Components/card/card.component';
import { TableEditComponent } from './Components/table-edit/table-edit.component';
import { EditItemsMedicamentoComponent } from './Pages/edit-items-medicamento/edit-items-medicamento.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent,
    TableComponent,
    DashboardMedicamentosComponent,
    DashboardPromocionesComponent,
    MenuComponent,
    NavbarComponent,
    CardComponent,
    TableEditComponent,
    EditItemsMedicamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
