import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',
       canActivate:[ProductDetailGuard],
      component:ProductDetailComponent},
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class ProductModule { }
