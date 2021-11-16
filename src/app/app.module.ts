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
    CardComponent
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
