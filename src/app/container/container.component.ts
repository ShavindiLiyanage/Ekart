import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
// 1 TO 19 VIDEOS LESSON
//   // name: string = 'iPhone 13';
//   // price: number = 999;
//   // color: string = 'Red'
// // name="Shavi L";
// //items =[2,3,4,5];
// addToCart: number = 0;
//   //  STRING INTRPOLATION
//   product = {
//     name: 'iPhone X',
//     price: 789,
//     color: 'Black',
//     discount: 8.5,
//     inStock: 10,
//     pimage: '/assets/images/iphone.jpg'
//   }

//   getDiscountedPrice(){
//     return this.product.price - (this.product.price * this.product.discount / 100)
//   }

//   onNameChange(event: any){
//     // this.name = event.target.value;
//     // console.log(event.target.value);
//   }

//   decrementCartValue(){
//     if(this.addToCart > 0){
//       this.addToCart--;
//     }
//   }

//   incrementCartValue(){
//     if(this.addToCart < this.product.inStock){
//       this.addToCart++;
//     }
//   }


//20 LESSON ONWARD
  listOfString: string[] = ['Mark','Steve','Merry','John','Sarah']

  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSearchText(value: string){
    this.searchText = value;
  }


}



