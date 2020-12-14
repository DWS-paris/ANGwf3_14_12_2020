// Importer le module pour configurer les routes
import { Routes } from "@angular/router";

// Imports des composants des routes
import { PorfolioPageComponent } from './routes/porfolio-page/porfolio-page.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { GamePageComponent } from './routes/game-page/game-page.component';

// Créer le module pour les routes et l'exporter
export const AppRouterModule: Routes = [ 
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "portfolio",
        component: PorfolioPageComponent
    },
    {
        path: "game",
        component: GamePageComponent
    }
];