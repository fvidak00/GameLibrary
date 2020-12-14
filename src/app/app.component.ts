import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from "@angular/common"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GameLibrary';

  constructor(@Inject(DOCUMENT) private document:Document, private renderer:Renderer2){
  }

  ngOnInit(){
    this.renderer.setAttribute(this.document.body, "class", "theme-light")
  }

  onSwitchedTheme(isDarkTheme:boolean){
    const hostClass=isDarkTheme ? "theme-dark":"theme-light"
    this.renderer.setAttribute(this.document.body,"class",hostClass)
  }
}
