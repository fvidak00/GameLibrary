import { Component } from "@angular/core";

import { Game } from "../models/game.model"

@Component({
  selector:"gl-gamecard",
  templateUrl:"./gamecard.component.html",
  styleUrls:["./gamecard.component.css"]
})
export class GamecardComponent{
  public gameImage:string=""


  onGameClicked(){
  }
}
