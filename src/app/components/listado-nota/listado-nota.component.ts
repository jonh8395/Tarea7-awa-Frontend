import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';
import { listadoNota } from 'src/app/data/nota';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-listado-nota',
  templateUrl: './listado-nota.component.html',
  styleUrls: ['./listado-nota.component.scss']
})
export class ListadoNotaComponent implements OnInit {
  notaslist: Array<listadoNota> = new Array<listadoNota>();
  dataSource: MatTableDataSource<listadoNota> = new MatTableDataSource(this.notaslist);

  displayedColumns = ['nombre','nota_parcial1','nota_parcial2','nota_final'];

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.notasService.getNotas().subscribe((data) => {
      console.log(data.notas);
      if (data.notas.length > 0){
        let temp: listadoNota;
        this.notaslist = new Array<listadoNota>();
        data.notas.forEach((element) => {
          temp = new listadoNota();
          temp.nombre = element.nombre;
          temp.nota_parcial1 = element.nota_parcial1;
          temp.nota_parcial2 = element.nota_parcial2;
          temp.nota_final = element.nota_final;
          this.notaslist.push(temp);
        });
        this.dataSource.data = this.notaslist;
      }

    });
  }

}
