import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { EditarProdComponent } from './componentes/editar-prod/editar-prod.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductosServicesService } from './servicios/productos-services.service';

// Angula material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  entryComponents: [
    EditarProdComponent
  ],
  declarations: [
    AppComponent,
    PrincipalComponent,
    EditarProdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    ProductosServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
