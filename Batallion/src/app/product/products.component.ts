import { Component, OnInit } from '@angular/core'
import { DataService } from '../shared/data.service';

@Component({
selector:'app-prod',
templateUrl:'./products.component.html'

})

export class ProductsComponent implements OnInit  {
    constructor(private dataService:DataService){

    }

ngOnInit(){
    this.product = this.dataService.getEvents();

}
product:any[];

}