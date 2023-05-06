import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeadComponent } from './componentes/head/head.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PrimeradirectivaComponent } from './directivas/primeradirectiva/primeradirectiva.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { PadreComponent } from './componentes/padre/padre.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ContenidoComponent,
    FooterComponent,
    MenuComponent,
    PrimeradirectivaComponent,
    HijoComponent,
    PadreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
