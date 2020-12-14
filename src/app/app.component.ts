import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameLibrary';

  private isDark=false

  @HostBinding("class")
  get themeMode(){
    return this.isDark ? "theme-dark":"theme-light"
  }


  onSwitchedTheme(isDarkTheme:boolean){
    this.isDark=isDarkTheme
  }
}
