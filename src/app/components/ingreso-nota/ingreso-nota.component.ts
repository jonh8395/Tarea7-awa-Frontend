import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-ingreso-nota',
  templateUrl: './ingreso-nota.component.html',
  styleUrls: ['./ingreso-nota.component.scss']
})
export class IngresoNotaComponent implements OnInit {
formulario: FormGroup;
  constructor(private fb: FormBuilder, private notaService: NotasService ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [''],
      nota_parcial1: [''],
      nota_parcial2: [''],
      nota_final: ['']
    })
  }

  onSubmit(){
    this.notaService.saveNotas(this.formulario.value).subscribe((x) => console.log(x));
    this.formulario.reset();
  }
}
