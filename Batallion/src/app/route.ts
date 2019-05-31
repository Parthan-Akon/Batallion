import { Routes} from '@angular/router';
import { ProductsComponent } from './product/products.component';
import { HomeComponent } from './home/home.component';

import { InventoryDataComponent } from './data/inventory-data.component';

export const appRoutes: Routes = [

    {path:'product',component: ProductsComponent},
    {path:'',component:HomeComponent},
    {path:'login',component:InventoryDataComponent},
    {path:'', redirectTo:'',pathMatch:'full'}
]