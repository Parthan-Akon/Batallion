import { Component, Input } from '@angular/core';

@Component({
    selector:'inv-thumb',
    templateUrl:'./inventory-thumbnail.component.html'
})

export class InventoryThumbnailComponent {
    @Input() product:any

}