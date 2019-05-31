import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './product/products.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { HomeComponent } from './home/home.component';

import { InventoryDataComponent } from './data/inventory-data.component';
import { DataService } from './shared/data.service';
import { SearchPipePipe } from './search-pipe.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
     
    InventoryDataComponent,
    SearchPipePipe,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
