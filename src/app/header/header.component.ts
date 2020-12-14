import { Component, EventEmitter, HostBinding, Output } from "@angular/core";
import { MatSlideToggle, MatSlideToggleChange } from "@angular/material/slide-toggle";

@Component({
  selector:"app-header",
  templateUrl:"./header.component.html",
  styleUrls:["./header.component.css"]
})
export class HeaderComponent{
  title="GameLibrary"

  @Output()
  readonly themeSwitched=new EventEmitter<boolean>()

  onChangeTheme({checked}:MatSlideToggleChange){
    this.themeSwitched.emit(checked)
  }
}
