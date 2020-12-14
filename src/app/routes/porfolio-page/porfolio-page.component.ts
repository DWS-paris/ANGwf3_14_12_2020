import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porfolio-page',
  templateUrl: './porfolio-page.component.html'
})
export class PorfolioPageComponent implements OnInit {

  // Déclarer un objet pour l'image à afficher
  public popinImg = {
    source: null,
    info: null
  };

  // Déclarer une variable pour ajouter ou supprimer la classe .displayed sur .overlay
  public showPopin = false;
  public showOpacity = false;

  // Déclaration de 3 tableaux d'objets pour afficher les images
  public colomn1 = [ 
    {
      source: "/assets/imgs/01.jpg",
      info: "Définition de l'image 1"
    },
    {
      source: "/assets/imgs/07.jpg",
      info: "Définition de l'image 7"
    },
    {
      source: "/assets/imgs/09.jpg",
      info: "Définition de l'image 9"
    }
  ];

  public colomn2 = [ 
    {
      source: "/assets/imgs/10.jpg",
      info: "Définition de l'image 10"
    },
    {
      source: "/assets/imgs/05.jpg",
      info: "Définition de l'image 5"
    },
    {
      source: "/assets/imgs/08.jpg",
      info: "Définition de l'image 8"
    }
  ];

  public colomn3 = [ 
    {
      source: "/assets/imgs/02.jpg",
      info: "Définition de l'image 02"
    },
    {
      source: "/assets/imgs/03.jpg",
      info: "Définition de l'image 3"
    },
    {
      source: "/assets/imgs/04.jpg",
      info: "Définition de l'image 4"
    }
  ];

  // Créer une variable pour afficher les images dans une popin
  public displayPopin = function(item){
    // Modifier le contenu de popinImg par celui de l'item récupéré au clic
    this.popinImg = item;

    // Afficher le popin
    this.showPopin = true;

    // Attendre 10ml
    setTimeout(() => {
      this.showOpacity = true;
    }, 10);
  };

  // Créer une fonction pour fermer le popin
  public hidePopin = function(){
    // Supprimer la classe .opacity
    this.showOpacity = false;

    // Attendre 300ml
    setTimeout(() => {
      this.showPopin = false;
    }, 300);
  }

  // Hook => Fonction lancée une fois le composant chargé
  ngOnInit(){
    console.log(this.colomn1);
  };

}
