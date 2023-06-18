import { Component } from '@angular/core';
import { GetdataService } from 'src/app/service/getdata.service';
import filters from './../../constants/filters'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(public data: GetdataService) { }
  public instituteData: any = []
  page: number=1;
  limit = 10;
  totalItems: any;
  filters:any = filters;
  loading:boolean=false;

  ngOnInit() {
    this.getData(this.limit,this.page)
  }
  getData(limit:number,page:number){
    this.loading=true;
    this.data.getData(limit,page).subscribe((res: any) => {
      this.instituteData = res.results
      this.totalItems = res.total;
      this.loading=false;
    }, (err:any) => {
      alert("failed to load data! - " + err.message);
      this.loading=false;
    });
  }

  getPage(page:any) {
    this.getData(this.limit, page);
  }
}
