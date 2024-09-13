import { Component } from '@angular/core';
import { DummyApiService } from 'src/app/services/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css']
})
export class DummyApiComponent {

  data: any;
  show: boolean = false;
  num: number = 1;
  dataArray: any[] = [];
  constructor(private service: DummyApiService) { }

  getData() {
    this.service.getData(this.num).subscribe((response) => {
      console.log(response)
      this.data = response
      this.show = true

    });


  }

  getAllData() {
    this.service.getAllData().subscribe((response:any) => {
      console.log(response)
      this.dataArray = response
      this.show = true

    });


  }




}
