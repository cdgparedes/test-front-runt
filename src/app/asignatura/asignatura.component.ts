import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Asignatura } from './asignatura';
import { ASIGNATURAS } from './casignaturas.json';
import { AsignaturaService } from './asignatura.service';
import { Profesor } from './profesor';


@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html'
})
export class AsignaturaComponent implements OnInit {
  asignaturas: Asignatura[];
  profesores: Profesor[];
  estudiantes: any[];
  opcionSeleccionado = 0;
  curso: string ;
  materia: string;
  
  constructor( private asignaturaService: AsignaturaService) { }
  
  ngOnInit(): void {
    this.asignaturaService.getProfesores().subscribe(
      profesores => this.profesores = profesores
    );
  }


 getAsignaturas( id: any): void{
  console.log(id);
  this.asignaturaService.getAsignaturas(id).subscribe((res: any) =>{
    this.estudiantes = res.estudiante;
    this.curso = (res.curso.grado + res.curso.salon) ;
    this.materia = res.nombre;
  });

 }
}
