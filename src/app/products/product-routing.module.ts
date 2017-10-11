import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-detail', component: ProductDetailComponent },
    { path: '', redirectTo: 'product-list', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule {
    static components = [ProductListComponent, ProductDetailComponent];
}
