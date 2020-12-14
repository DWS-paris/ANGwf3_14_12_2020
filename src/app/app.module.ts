import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importer le module pour la gestion des formulaires
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* 
Gestion des routes
*/
  // Importer le module Angular pour la gestion des routes
  import { RouterModule } from "@angular/router";

  // Importer le modules pour configurer les routes
  import { AppRouterModule } from "./app.router";
//

import { AppComponent } from './app.component';
import { PorfolioPageComponent } from './routes/porfolio-page/porfolio-page.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { GamePageComponent } from './routes/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PorfolioPageComponent,
    HomePageComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    // Configuration du module du router
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
