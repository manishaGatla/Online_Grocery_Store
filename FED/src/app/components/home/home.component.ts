import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAddNewProdBtnClicked: boolean = false;
  isEditProductBtnClicked: boolean = false;
  product: any;
  products: any ;
  items = [
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    },
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    },
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    },
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    },
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    },
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    }
    // Add more items here
  ];



  constructor(public loginService: LoginService, private productService: ProductsService) {}

  ngOnInit() {
    if(this.loginService.isCustomer){
      this.productService.getProducts().subscribe((res)=>{
        this.products = res;
      })
    }
  }

  onProductAddSubmit(): void {
    if(this.isEditProductBtnClicked){
      const reqBody = {
        filter: this.product._id,
        update: {
          product:        this.product.product,
          category:       this.product.category,
          brand:          this.product.brand,
          sale_price:     this.product.sale_price,
          market_price:   this.product.market_price,
          type:           this.product.type,
          rating:         this.product.rating,
          description:    this.product.description,
        }
      }
      this.productService.editProduct(reqBody).subscribe((res)=>{
        
      })
    }
    else{
      this.productService.addProduct(this.product).subscribe((res)=>{
        if(res){
    
        }
       })
    }
 
  }

  editProduct(product: any){
    this.isEditProductBtnClicked = true;
    this.product = product;
  }


  addNewProdBtnClicked(){
    this.isAddNewProdBtnClicked = true;
  }

  onFileSelected(event: any) {
    const selectedFile : File = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);
    reader.onload = (res : any)=>{
     this.product.imgUrl = res.target.result;
    }
  }


  addToCart(item : any) {
    // Implement your cart functionality here
  }
}