import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent {
  @Input() currentMenu: Array<any> = [];
  @Output() updateCurrentMenu = new EventEmitter<string>();

  changeCurrentMenu(menuItem:any){
    this.updateCurrentMenu.emit(menuItem);
  }

}
