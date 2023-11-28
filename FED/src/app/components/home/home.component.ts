import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAddNewProdBtnClicked: boolean = false;
  isEditProductBtnClicked: boolean = false;
  product: any;
  selectedCategories: string[] = [];
  products: any ;
  categories: any;
  isDropdownOpen = false;
  quantityValue: any;



  constructor(public loginService: LoginService, private productService: ProductsService, private router: Router) {}

  ngOnInit() {
    if(this.loginService.isCustomer){
      this.productService.getCategories().subscribe((resProd)=>{
        this.categories = resProd;
        this.productService.getProducts().subscribe((res)=>{
          this.products = res;
          this.products.forEach((c: any)=> c.quantity = 1);
        })
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

  onCategoryChange(event: any): void {
    var categoryId = event.target.value;
    const index = this.selectedCategories.indexOf(categoryId);
    if (index !== -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(categoryId);
    }

    var selectedCategoriesName : any = [];
    this.selectedCategories.forEach((item: any) => {
     if(this.categories.findIndex((c: any)=> c._id == item) != -1){
      var categoryName = this.categories.find((c: any)=> c._id == item).categoryName;
      selectedCategoriesName.push(categoryName.trim());
     }
    });
    if(selectedCategoriesName && selectedCategoriesName.length > 0){
    this.productService.getProductsByCategories(selectedCategoriesName).subscribe(products => {
      this.products = products;
      this.products.forEach((c: any)=> c.quantity = 1);
      this.isDropdownOpen = !this.isDropdownOpen;
    });
  }
  else{
    this.productService.getProducts().subscribe((res)=>{
      this.products = res;
      this.products.forEach((c: any)=> c.quantity = 1);
      this.isDropdownOpen = !this.isDropdownOpen;
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
    var body = item;
    body["quantity"]=  item.quantity;
    body["customerEmail"] = this.loginService.profileDetails.email;
    this.productService.addToCart(body).subscribe((res)=>{
      this.router.navigateByUrl('/cart');
    })
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}