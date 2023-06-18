import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  public drawerIsOpen = false;
  
  public toggleDrawer(state:boolean, focusOnSearch:boolean) {
    this.drawerIsOpen = state;
    if(focusOnSearch){
      setTimeout(()=>{
        document.getElementById('menu-search')?.focus();
      }, 500);
    }
  }

}
