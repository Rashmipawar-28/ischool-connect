import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  public showFilterdiv:boolean =true;
  @Input() filter :any;
  showFilter(){
    this.showFilterdiv = !this.showFilterdiv
  }
}
