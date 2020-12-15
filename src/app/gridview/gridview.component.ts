import { Component, HostListener, OnInit } from "@angular/core";

import { Game } from "../models/game.model"

@Component({
  selector: "gl-gridview",
  templateUrl:"./gridview.component.html",
  styleUrls:["./gridview.component.css"]
})
export class GridviewComponent implements OnInit{
// Grid size parameters
  public innerWidth:number=1
  public itemWidth:number=100
  public nItemsInRow:number=5
//
// Setting dummy game items
  private nItems:number=69
  public dummyGameList:Game[]=[]
//

  ngOnInit(){
// Initial grid size
    this.innerWidth=window.innerWidth
    this.nItemsInRow=Math.floor(this.innerWidth/this.itemWidth)
//
// Inicializing dummy list
    for(let i:number=0;i<this.nItems;i++){
      this.dummyGameList.push({title:"LetsBePolite "+i, imagePath:"ImageSoonTM"})
    }
//
  }

// Resize grid when window resizes
  @HostListener("window:resize",["$event"])
  onResize(event:any){
    this.innerWidth=event.target.innerWidth
    this.nItemsInRow=Math.floor(this.innerWidth/this.itemWidth)
  }
//
}
