import { Routes} from '@angular/router';
import { ProductsComponent } from './product/products.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [

    {path:'product',component: ProductsComponent},
    {path:'',component:HomeComponent}
]