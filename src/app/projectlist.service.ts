import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class ProjectlistService {

  constructor(private translate: TranslateService) { }

  projectlist = [
    {
      name: "Join",
      tools: "JavaScript | HTML | CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      img: "join.png",
      github: "https://github.com/simonbrost/JOIN",
      demo: "https://simon-brost.developerakademie.net/Join/application.html",
    },
    {
      name: "El Pollo Loco",
      tools: "JavaScript | HTML | CSS",
      description: "A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the killer chicken.",
      img: "polloloco.png",
      github: "https://github.com/simonbrost/El-Pollo-Loco",
      demo: "https://simon-brost.developerakademie.net/elPolloLoco/index.html",
    },
    {
      name: "Pokedex",
      tools: "Angular | TypeScript | SCSS",
      description: "My Approach to the famous Pokedex. Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      img: "pokedex.png",
      github: "https://github.com/simonbrost/angular-pokedex",
      demo: "https://simon-brost.developerakademie.net/pokedex/",
    }
  ];

  translateDescriptions() {
    this.projectlist.forEach(project => {
      project.description = this.translate.instant(project.description);
    });
  }
}
