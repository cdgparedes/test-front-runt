import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { AsignaturaService } from './asignatura/asignatura.service';

import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 


const routes: Routes = [
  
  { path: '', redirectTo: '/asignaturas', pathMatch: 'full' },
  { path: 'asignaturas', component: AsignaturaComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsignaturaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AsignaturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
