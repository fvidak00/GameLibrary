import { Component, EventEmitter, Output } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";

@Component({
  selector:"app-header",
  templateUrl:"./header.component.html",
  styleUrls:["./header.component.css"]
})
export class HeaderComponent{
  title="GameLibrary"
  currentTheme="Light"

  @Output()
  readonly themeSwitched=new EventEmitter<boolean>()

  onChangeTheme({checked}:MatSlideToggleChange){
    this.currentTheme=checked ? "Dark":"Light"
    this.themeSwitched.emit(checked)
  }
}
