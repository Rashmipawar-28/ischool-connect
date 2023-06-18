import { Component, EventEmitter, Input, Output } from '@angular/core';
import MenuItems from '../../constants/menu';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})

export class DrawerComponent {
  @Output() closeBtnClicked = new EventEmitter<boolean>();

  public menuItems = MenuItems;
  public currentMenu = MenuItems;
  public breadcrumbs  = [{title:"Home", children:MenuItems}];
  public drawerTitle = this.breadcrumbs[this.breadcrumbs.length-1]?.title;

  updateCurrentMenu(menuItem:any){
    this.breadcrumbs = [...this.breadcrumbs, menuItem];
    this.currentMenu = menuItem?.children;
    this.drawerTitle = menuItem?.title;
  }

  removeFromBreadCrumbs(){
    if(this.breadcrumbs.length ===1){
      return this.closeDrawer();
    }
    this.breadcrumbs.pop();
    let lastItem = this.breadcrumbs[this.breadcrumbs.length-1];
    this.drawerTitle = lastItem?.title;
    this.currentMenu = lastItem?.children;
  }

  public closeDrawer(){
    this.closeBtnClicked.emit();
  }

}
