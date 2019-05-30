import { Routes} from '@angular/router';
import { ProductsComponent } from './product/products.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory-control/inventory.component';

export const appRoutes: Routes = [

    {path:'product',component: ProductsComponent},
    {path:'',component:HomeComponent},
    {path:'login',component:InventoryComponent},
    {path:'', redirectTo:'',pathMatch:'full'}
]