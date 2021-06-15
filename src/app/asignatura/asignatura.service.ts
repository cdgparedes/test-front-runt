import { Injectable } from '@angular/core';
import { Asignatura } from './asignatura';
import { ASIGNATURAS } from './casignaturas.json';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profesor } from './profesor';


@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  private urlEndPoind: string = 'http://localhost:8080/profesor/listarprofesor';
  private urlEndPoind2: string = 'http://localhost:8080/asignatura/listarAsignaturasId';

  constructor( private http: HttpClient) { }


  getProfesores(): Observable<Profesor[]>{
    return this.http.get <Profesor[]>(this.urlEndPoind);
  }

  getAsignaturas(id: any){
    return this.http.get(`${this.urlEndPoind2}/${id}`);
 }
}
