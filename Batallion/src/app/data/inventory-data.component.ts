import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';


@Component({
    selector:'inv-data',
    templateUrl:'./inventory-data.component.html'
})

export class InventoryDataComponent implements OnInit{
    constructor(private dataService:DataService){

    }
    ngOnInit(){
        this.product = this.dataService.getEvents();

    }
    product:any[];
}