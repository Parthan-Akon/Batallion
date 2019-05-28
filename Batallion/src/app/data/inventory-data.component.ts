import { Component } from '@angular/core';


@Component({
    selector:'inv-data',
    templateUrl:'./inventory-data.component.html'
})

export class InventoryDataComponent{
    product = {
        id:1,
        name:'wild-bohr',
        price:1200,
        instock: 'yes',
        image:'image'
    }

}