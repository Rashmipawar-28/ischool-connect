import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu-item',
  templateUrl: './dropdown-menu-item.component.html',
  styleUrls: ['./dropdown-menu-item.component.css']
})
export class DropdownMenuItemComponent {
  @Input() menuItem: any;
  public show: boolean = false;

  public toggleShow(){
    this.show = !this.show;
  }
}
