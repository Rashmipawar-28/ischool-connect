import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InsituteComponent {
  @Input() institue:any;
  ngOnInit(){
    console.log(this.institue);
  }
}
