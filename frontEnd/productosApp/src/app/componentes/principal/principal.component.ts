import { Component, OnInit } from '@angular/core';
import { ProductosServicesService } from '../../servicios/productos-services.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import { EditarProdComponent } from '../editar-prod/editar-prod.component';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [ProductosServicesService]
})
export class PrincipalComponent implements OnInit {

  // API = 'producto';
  data_prod: any[] = [];

  constructor( private prodServices: ProductosServicesService,
               public dialog: MatDialog  ) {}

  ngOnInit() {
    this.prodServices.getProductos().subscribe( data => {
      // tslint:disable-next-line:forin
      for (const key$ in data) {
        // console.log(data[key$]);
        this.data_prod.push(data[key$]);
      }
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditarProdComponent, {
      width: '250px'
      // data: {name: "Cris", animal: this."Dog"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }





}
