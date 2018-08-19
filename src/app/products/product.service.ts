import { Injectable } from "../../../node_modules/@angular/core";
import {HttpClientModule, HttpClient, HttpErrorResponse} from '@angular/common/http'
import { IProduct } from "./product";
import { Observable, throwError } from "../../../node_modules/rxjs";
import {tap,catchError, map} from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class ProductService{

    private productUrl='api/products/products.json';

    constructor(private http:HttpClient){

    }
  getProducts():Observable<IProduct[]>{
      return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data=>console.log('All: '+JSON.stringify(data))), 
          catchError(this.handleError)
      );
  }
  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }
  private handleError(err:HttpErrorResponse){
      let errorMessage='';
      if(err.error instanceof ErrorEvent){
          errorMessage=`An error Occured: ${err.error.message}`;
      }
        else{
            errorMessage=`Server Returned Code: ${err.status},error message is: ${err.message}`
        }
        console.error(errorMessage);
        return throwError(errorMessage);
  }
}