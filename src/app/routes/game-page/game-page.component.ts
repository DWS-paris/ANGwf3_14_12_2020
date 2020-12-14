import { Component, OnInit } from '@angular/core';

// Importer les module pour la gestion du formulaire
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styles: [
  ]
})
export class GamePageComponent implements OnInit {

  // Déclarations
  private randomNumber: Number = null;
  public pseudoFormData: FormGroup;

  // Injecter FormBuilder dans la class
  constructor(
    private FormBuilder: FormBuilder
  ) { }

  // Créer une fonction pour initialiser le formulaire
  private resetForm = function(){
    this.pseudoFormData = this.FormBuilder.group({
      gamer: [ null, Validators.required ]
    });
  }

  // Créer une fonction pour la soumission du formulaire
  public formSubmit = function(){
    console.log(this.pseudoFormData.value);
  }

  // Créer une fonction pour générer un nombre aléatoire
  private generateRandom = function(){
    this.randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(this.randomNumber);
  }

  ngOnInit(): void {
    // Générer un nombre aléatoire une fois le composant chargé
    this.generateRandom();

    // Initialiser le formulaire
    this.resetForm();
  }

}
