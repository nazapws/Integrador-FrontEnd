import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { Logo1Component } from './componentes/logo1/logo1.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { InfoComponent } from './componentes/info/info.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EduComponent } from './componentes/edu/edu.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { B1Component } from './componentes/b1/b1.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PieComponent } from './componentes/pie/pie.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    Logo1Component,
    BannerComponent,
    InfoComponent,
    ExperienciaComponent,
    EduComponent,
    B1Component,
    ProyectosComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
