import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
   pageTitle:string='Product List';   
    errorMessage:string;
   products:IProduct[]=[];
   imageWidth:number=50;
   imageMargin:number=50;
   showImage:boolean=false;
    private _listFilter: string; 
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts=this.listFilter?this.performFilter( this.listFilter): this.products;
    }
    filteredProducts:IProduct[];
   
   
   constructor(private productService:ProductService){
   }

   toggleImage():void{
       this.showImage=!this.showImage;
   }
   ngOnInit():void{
       console.log('In Onit');
       this.productService.getProducts().subscribe(
           products=>{
               this.products=products;
               this.filteredProducts=this.products;
            },
           error=>this.errorMessage=<any>Error
       );
      
   }
   performFilter(filterBy:string):IProduct[]{
       filterBy=filterBy.toLocaleLowerCase();
       return this.products.filter((product:IProduct)=>
          product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1
        );

   }
   onRatingClicked(message:string):void{
      this.pageTitle='Product List: '+message;
   }
}