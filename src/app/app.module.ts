import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeadComponent } from './componentes/head/head.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MenuComponent } from './componentes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ContenidoComponent,
    FooterComponent,
    MenuComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
